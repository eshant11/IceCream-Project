import React from "react";
import Navbar from "./Navbar";
import logo from "../component/images/logo.jpg";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <section id="banner">
        <img src={logo} alt="banner" className="logo" />
        <div className="banner-text">
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
          <div className="banner-btn"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
