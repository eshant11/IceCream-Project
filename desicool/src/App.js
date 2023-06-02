import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./Contact";
import Product from "./component/Product";
import Features from "./component/Features";
function App() {
  return (
    <>
      {/* <Navbar />
      <br /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
