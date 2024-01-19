import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const ContentLima = () => {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [identifier, setIdentifier] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    try {
      const GetData = async () => {
        let [userResponse, photoResponse] = await Promise.all([await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`), await axios.get(`https://jsonplaceholder.typicode.com/photos/${identifier}`)]);
        setUser(userResponse.data);
        setPost(photoResponse.data);
        setLoading(false);
      };
      GetData();
    } catch (e) {
      setLoading(false);

      if (e.response && e.response.status === 404) {
        setError("User not found");
      } else {
        console.log(e.message);
      }
    }
  }, [identifier]);
  console.log(user);

  const counterNumber = (desc) => {
    if (desc === "mins") {
      setNumber(number === 0 ? number : number - 1);
    } else {
      setNumber(number + 1);
    }
  };
  return (
    <>
      <h1>Functional Component</h1>
      <button>{number}</button>
      <button onClick={() => counterNumber("mins")}>-</button>
      <button onClick={() => counterNumber("plus")}>+</button>

      <div className="container">
        <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        {loading ? (
          <p>Loading...</p>
        ) : ( !error ? (
          <>
            <div>
              <p>{user.username}</p>
            </div>
            <div>
              <p>{post.adress}</p>
            </div>
          </>
        ) : (
          <div>
            <p>Error bjir orangnya ga ada</p>
          </div>
        )
          
        )}
      </div>
    </>
  );
};
export default ContentLima;
