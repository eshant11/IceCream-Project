import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import download from "../component/images/download.png";
import close from "../component/images/close-window.png";

const Navbar = () => {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const menuControl = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      {navbarVisible && (
        <div
          id="sideNav"
          className={navbarVisible ? "sideNavOpen" : "sideNavClosed"}
        >
          <nav>
            <ul>
              <li>
                <NavLink id="li" to="/">
                  HOME
                </NavLink>
              </li>
              <li id="li">
                <NavLink id="li" to="/features">
                  FEATURES
                </NavLink>
              </li>
              <li>
                <NavLink id="li" to="/services">
                  OUR PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink id="li" to="/contact">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <div id="menuBtn" onClick={menuControl}>
        {/* <img src={navbarVisible ? close : download} alt="menuBtn" id="menu" /> */}
        {navbarVisible ? (
          <i class="fa-regular fa fa-rectangle-xmark fa-beat"></i>
        ) : (
          <i class="fa-solid fa fa-bars fa-flip"></i>
        )}
      </div>
    </>
  );
};

export default Navbar;
