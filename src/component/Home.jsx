import React from "react";
import logo from "../component/images/logo.jpg";
import { useState } from "react";

const Home = (props) => {
  const [navbarVisible, setNavbarVisible] = useState(props.navbarVisible);
  return (
    <>
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
