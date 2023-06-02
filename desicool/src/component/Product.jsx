import React from "react";
import Navbar from "./Navbar";
import butter from "../component/images/vutter gelato.jpg";
import ferrero from "../component/images/Ferrero Rocher.jpg";
import chocolate from "../component/images/chocolate gelato.jpg";
import coffee from "../component/images/coffee hazelnut.jpg";
const Product = () => {
  return (
    <>
      <Navbar />

      <section id="service">
        <div className="title-text">
          <p>OUR PRODUCTS</p>
          <h1>We Provide Better</h1>
        </div>
        <div className="service-box">
          <div className="single-service">
            <img src={butter} alt="butter" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Butter Gelato</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, at consequatur. Explicabo minima itaque facere{" "}
              </p>
            </div>
          </div>

          <div className="single-service">
            <img src={ferrero} alt="ferrero" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Ferrero Rocher</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, at consequatur. Explicabo minima itaque facere{" "}
              </p>
            </div>
          </div>

          <div className="single-service">
            <img src={chocolate} alt="chocolate" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Chocolate Gelato</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, at consequatur. Explicabo minima itaque facere{" "}
              </p>
            </div>
          </div>

          <div className="single-service">
            <img src={coffee} alt="coffee" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>Coffee Hazelnut</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, at consequatur. Explicabo minima itaque facere{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
