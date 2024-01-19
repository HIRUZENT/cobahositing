import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Content.css";

const Content = () => {
  const [getText, SetText] = useState("Selamat datang!");

  const [states, setStates] = useState({
    counter: 0,
    makanan: ["ikan teri"],
  });
  const gantiStates = () => {
    setStates({ ...states,
    counter: states.counter + 1, 
    makanan: states.counter + 1 > 2 ? (states.makanan = ["ikan kucink"]) : states.makanan });
    console.log(states.counter);
  };
  const changeText = (t) => {
    SetText(t);
  };

  const Navigasi = useNavigate();
  const linkRef = useRef();
  const goTo = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="container containerContent">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{getText}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ul className="WrapWelcome">
            <li>
              <button onClick={() => changeText("Selamat berlabuh")}>Selamat Berlabuh</button>
            </li>
            <li>
              <button onClick={() => changeText("Selamat jalan")}>Selamat Jalan</button>
            </li>
            <li>
              <button onClick={() => changeText("Selamat kembali")}>Selamat Kembali</button>
            </li>
          </ul>
        </div>
        <div className="row mb-3">
          <div className="col-6 text-center">
            <h6 onClick={() => gantiStates()}>Click buat tambah angka +</h6>
          </div>
          <div className="col-6 text-center">
            <h6>Angka saat ini adalah {states.counter}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">kamu mendapatkan {states.makanan}</div>
        </div>
        <div className="row">
          <ul>
            <li>
              <p onClick={() => goTo(linkRef.current)}>Pergi ke logo</p>
            </li>
          </ul>
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, inventore laborum magni magnam aliquam, ex laudantium saepe odit doloribus earum, vitae tempora aspernatur dolores! Ex illum molestias aspernatur quod accusantium
            repudiandae autem doloribus nihil nemo, beatae iusto odio modi eius culpa ut excepturi quas voluptatum aperiam et architecto odit fugiat!
          </p>
        </div>
        <div className="row">
          <ul className="wrapPage">
            <li>
              <button onClick={() => Navigasi("/")}>Ke halaman Home</button>
            </li>
            <li>
              <button onClick={() => Navigasi("/madding")}>Ke halaman Madding</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Content;
