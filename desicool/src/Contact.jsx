import React from "react";
import Navbar from "./component/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="footer">
        <img src="image/footer.jpg" className="footer-img" />
        <div className="title-text">
          <p>CONTACTS</p>
          <h1>Visit Shop Today</h1>
        </div>
        <div className="footer-row">
          <div className="footer-left">
            <h1>Opening Hours</h1>
            <p>
              {" "}
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
              Basra Coldrinks, Bomay Bazar, in front of old kewalram petrol
              pump, (Madhya Pradesh) 450001
              <i className="fa fa-solid fa-location-dot"></i>
            </p>
            <p>
              example@website.com<i className="fa fa-paper-plane"></i>
            </p>
            <p>
              +91 1234567890<i className="fa fa-solid fa-phone"></i>
            </p>
          </div>
        </div>

        <div className="social-link">
          <i className="fa fa-footer fa-solid fa-facebook"></i>
          <a href="https://www.instagram.com/desicool_icecreams/">
            {" "}
            <i className="fa fa-footer fa-solid fa-instagram"></i>
          </a>
          <i className="fa fa-footer fa-solid fa-twitter"></i>
          <i className="fa fa-footer fa-solid fa-youtube"></i>
          <p>
            {" "}
            <small className="CopyRight">©</small> Copyright DesiCool IceCream
            Parlour
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
