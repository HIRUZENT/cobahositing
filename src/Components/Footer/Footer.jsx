import React from "react";
import imgFooter from "../../images/onedex.png";
import "./Footer.css";

const Footer = (props) => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <img src={imgFooter} alt="imagefooter" />
        </div>
      </div>
    </div>
    </>
  );
};
export default Footer;
