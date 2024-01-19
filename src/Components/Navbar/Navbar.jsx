import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/onedex.png";
const Navbar = () => {
  const [dropDown, setDropdown] = useState(false);

  return (
    <nav>
      <div className="container containerNavbar">
        <div className="wraper d-flex">
          <img id="logoNavbar" src={logo} alt="imagesLogo" />
          <p id="headerName">SMK NEGERI 1 DEPOK</p>
        </div>
        <ul>
          <li>
            <a href="items">Home</a>
          </li>
          <li>
            <a href="items">About</a>
          </li>
          <li>
            <p onClick={() => setDropdown((prev) => !prev)}>Contact</p>
            {dropDown && (
              //bisa pake ternary ? juga
              <div className="dropDowns">
                <li>
                  <a href="keInstagram">
                    <p>Instagram</p>
                  </a>
                </li>
                <li>
                  <a href="keInstagram">
                    <p>Instagram</p>
                  </a>
                </li>
                <li>
                  <a href="keInstagram">
                    <p>Instagram</p>
                  </a>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
