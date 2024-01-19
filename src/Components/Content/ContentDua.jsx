import { useState, useEffect } from "react";
import axios from "axios";
const ContentDua = () => {
  const [users, setUsers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [Posts, setPosts] = useState([]);
  const [identifier, setIdetifier] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const GetData = async () => {
        let [usersResponse, photoResponse, postsResponse] = await Promise.all([
          await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`),
          await axios.get(`https://jsonplaceholder.typicode.com/photos/${identifier}`),
          await axios.get(`https://dummyjson.com/products/${identifier}`),
        ]);
        setUsers(usersResponse.data);
        setPhotos(photoResponse.data);
        setPosts(postsResponse.data);
        setIsLoading(false);
      };
      GetData();
    } catch (e) {
      setIsLoading(false);
      console.log(e.message);
    }
  }, [identifier]);
  console.log(users);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <input type="text" value={identifier} onChange={(e) => setIdetifier(e.target.value)} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <td>Username</td>
                <td>Photo</td>
                <td>Name</td>
                <td>Products</td>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td>Loading bentar...</td>
                </tr>
              ) : (
                <tr>
                  <td>{users.name}</td>
                  <td>
                    <img src={photos.url} alt="" />
                  </td>
                  <td>{users.username}</td>
                  <td>{Posts.title}</td>
                  {/* coba ambil data users, posts, comments dll dari api tersebut dan tampilkan ke halaman  */}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ContentDua;
