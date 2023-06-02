import React from "react";
import Navbar from "./Navbar";
import feature from "../component/images/features.jpg";
const Features = () => {
  return (
    <>
      <Navbar />
      <section id="feature">
        <div className="title-text">
          <p>FEATURES</p>
          <h1>Why Choose Us</h1>
        </div>
        <div className="feature-box">
          <div className="features">
            <h1>Experienced Staff</h1>
            <div className="features-desc">
              <div className="feature-icon">
                <i className="fa fa-shield"></i>
              </div>
              <div className="feature-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>

            <h1>Maintaining Quality</h1>
            <div className="features-desc">
              <div className="feature-icon">
                <i className="fa fa-solid fa-square-check"></i>
              </div>
              <div className="feature-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>

            <h1>Affordable Cost</h1>
            <div className="features-desc">
              <div className="feature-icon">
                <i className="fa fa-inr"></i>
              </div>
              <div className="feature-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
          <div className="features-img">
            <img src={feature} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
