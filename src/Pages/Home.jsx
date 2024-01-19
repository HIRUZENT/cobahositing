import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Content from "../Components/Content/Content";
import ContentDua from "../Components/Content/ContentDua";
import ContentTiga from "../Components/Content/ContentTiga";
import ContentEmpat from "../Components/Content/ContentEmpat";
import ContentLima from "../Components/Content/ContentLima";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContentEmpat />
      {/* <ContentTiga /> */}
      {/* <Footer /> */}
    </>
  );
};
export default Home;