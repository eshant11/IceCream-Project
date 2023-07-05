import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Features from "./component/Features";
import Navbar from "./component/Navbar";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  return (
    <>
      <Navbar navbarVisible={navbarVisible} />

      <Routes>
        <Route
          path="/"
          element={<Home heading={"Desi Cool"} para={"Taste your life"} />}
        />
        <Route
          path="/features"
          element={<Features para={"FEATURES"} heading={"Why Choose Us"} />}
        />
        <Route
          path="/contact"
          element={<Contact para={"CONTACTS"} heading={"Visit Shop Today"} />}
        />
        <Route
          path="/services"
          element={
            <Product
              para={"OUR PRODUCTS"}
              heading={"We Provide Better"}
              product1Name={"Butter Gelato"}
              product2Name={"Ferrero Rocher"}
              product3Name={"Chocolate Gelato"}
              product4Name={"Coffee Hazelnut"}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
