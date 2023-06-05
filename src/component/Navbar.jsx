import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [navbarVisible, setNavbarVisible] = useState(props.navbarVisible);

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
        {navbarVisible ? (
          <i className="fa-regular fa fa-rectangle-xmark fa-beat"></i>
        ) : (
          <i className="fa-solid fa fa-bars fa-flip"></i>
        )}
      </div>
    </>
  );
};

export default Navbar;
