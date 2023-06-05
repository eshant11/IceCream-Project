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
                <NavLink
                  id="li"
                  to="/"
                  onClick={() => {
                    setNavbarVisible(false);
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li id="li">
                <NavLink
                  id="li"
                  to="/features"
                  onClick={() => {
                    setNavbarVisible(false);
                  }}
                >
                  FEATURES
                </NavLink>
              </li>
              <li>
                <NavLink
                  id="li"
                  to="/services"
                  onClick={() => {
                    setNavbarVisible(false);
                  }}
                >
                  OUR PRODUCTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  id="li"
                  to="/contact"
                  onClick={() => {
                    setNavbarVisible(false);
                  }}
                >
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
