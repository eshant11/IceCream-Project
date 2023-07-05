import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Theme from "./Theme";

const Contact = (props) => {
  const [contactObj, setContactObj] = useState({
    address: `Basra Coldrinks, Bomay Bazar, in front of old kewalram petrol
              pump, (Madhya Pradesh) 450001`,
    phone: +91123456890,
    mail: `example@website.com`,
  });

  return (
    <>
      <section id="footer">
        <Theme />

        <img src="image/footer.jpg" className="footer-img" />
        <div className="title-text">
          <p>{props.para}</p>
          <h1>{props.heading}</h1>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h1>Opening Hours</h1>
            <p>
              <i className="fa fa-solid fa-clock"></i>Monday to Friday - 10am to
              9pm
            </p>
            <p>
              <i className="fa fa-solid fa-clock"></i>Saturday to Sunday - 10am
              to 11pm
            </p>
          </div>
          <div className="footer-right">
            <h1>Get In Touch</h1>
            <p>
              {contactObj.address}
              <i className="fa fa-solid fa-location-dot"></i>
            </p>
            <p>
              {contactObj.mail}
              <i className="fa fa-paper-plane"></i>
            </p>
            <p>
              {contactObj.phone}
              <i className="fa fa-solid fa-phone"></i>
            </p>
          </div>
        </div>

        <div className="social-link">
          <i className="fa fa-footer fa-solid fa-facebook"></i>
          <NavLink to="https://www.instagram.com/desicool_icecreams/">
            <i className="fa fa-footer fa-solid fa-instagram"></i>
          </NavLink>
          <i className="fa fa-footer fa-solid fa-twitter"></i>
          <i className="fa fa-footer fa-solid fa-youtube"></i>
          <p>
            <small className="CopyRight">©</small> Copyright DesiCool IceCream
            Parlour
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
