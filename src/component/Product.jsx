import React, { useState } from "react";
import butter from "../component/images/vutter gelato.jpg";
import ferrero from "../component/images/Ferrero Rocher.jpg";
import chocolate from "../component/images/chocolate gelato.jpg";
import coffee from "../component/images/coffee hazelnut.jpg";
import Theme from "./Theme";

const Product = (props) => {
  const [para, setPara] =
    useState(`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, at consequatur. Explicabo minima itaque facere`);

  return (
    <>
      <section id="service">
        <Theme />

        <div className="title-text">
          <p>{props.para}</p>
          <h1>{props.heading}</h1>
        </div>
        <div className="service-box">
          <div className="single-service">
            <img src={butter} alt="butter" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>{props.product1Name}</h3>
              <hr />
              <p>{para}</p>
            </div>
          </div>

          <div className="single-service">
            <img src={ferrero} alt="ferrero" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>{props.product2Name}</h3>
              <hr />
              <p>{para}</p>
            </div>
          </div>

          <div className="single-service">
            <img src={chocolate} alt="chocolate" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>{props.product3Name}</h3>
              <hr />
              <p>{para}</p>
            </div>
          </div>

          <div className="single-service">
            <img src={coffee} alt="coffee" />
            <div className="overlay"></div>
            <div className="service-desc">
              <h3>{props.product4Name}</h3>
              <hr />
              <p>{para}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
