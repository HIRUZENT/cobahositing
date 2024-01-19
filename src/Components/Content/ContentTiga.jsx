import React, { useState, useEffect } from "react";
import Content from "./Content";
import ContentDua from "./ContentDua";
const ContentTiga = () => {
  const [display, setDisplay] = useState({
    kontenSatu: false,
    kontenDua: false,
  });
  //   const HandlerContent = () => {
  //     setDisplay((prevDisplay) => ({
  //       ...prevDisplay,
  //       kontenSatu: !prevDisplay.kontenSatu,
  //       kontenDua: !prevDisplay.kontenDua
  //     }));
  //   };

  const HandlerSatu = () => {
    setDisplay((prev) => ({
      ...prev,
      kontenSatu: !prev.kontenSatu
    }));
  };

  const HandlerDua = () => {
      setDisplay((prev) => ({
          ...prev, kontenDua : !prev.kontenDua
      }))
  }
  return (
    <div className="container">
      <div className="row">
        <button className="btnContentDua" onClick={() => HandlerSatu()}>
          Button Toggle Content Dua
        </button>
        {display.kontenSatu && <ContentDua />}
      </div>
      <div className="row">
        <button className="btnContentSatu" onClick={() => HandlerDua()}>
          Button Toggle Content Tiga
        </button>
        {display.kontenDua && <Content />}
      </div>
    </div>
  );
};

export default ContentTiga;
