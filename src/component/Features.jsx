import React, { useState } from "react";
import feature from "../component/images/features.jpg";
import Theme from "./Theme";
const Features = (props) => {
  const [para, setPara] = useState(
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. `
  );
  return (
    <>
      <section id="feature">
        <Theme />

        <div className="title-text">
          <p>{props.para}</p>
          <h1>{props.heading}</h1>
        </div>
        <div className="feature-box">
          <div className="features">
            <h1>Experienced Staff</h1>
            <div className="features-desc">
              <div className="feature-icon">
                <i className="fa fa-shield"></i>
              </div>
              <div className="feature-text">
                <p>{para}</p>
              </div>
            </div>

            <h1>Maintaining Quality</h1>
            <div className="features-desc">
              <div className="feature-icon">
                <i className="fa fa-solid fa-square-check"></i>
              </div>
              <div className="feature-text">
                <p>{para} </p>
              </div>
            </div>

            <h1>Affordable Cost</h1>
            <div className="features-desc">
              <div className="feature-icon">
                <i className="fa fa-inr"></i>
              </div>
              <div className="feature-text">
                <p>{para} </p>
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
