import React from "react";
import Navbar from "./Navbar";
import logo from "../component/images/logo.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <section id="banner">
        <img src={logo} alt="banner" className="logo" />
        <div className="banner-text">
          <h1>Desi Cool</h1>
          <p>Taste your life</p>
          <div className="banner-btn"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
