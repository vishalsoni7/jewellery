import React from "react";

import { Link } from "react-router-dom";

import "../landing/landing.css";

import { SlideShow } from "../component/SlideShow.jsx";

export const Landing = () => {
  return (
    <div>
      <div>
        <SlideShow />
      </div>

      <div>
        <h1 className="category-heading"> Top Collections</h1>
        <p className="category-description">
          Our jewelry categories include stunning engagement rings, delicate
          charm bracelets and timeless mangalsutra, ensuring there's something
          exquisite for every taste.
        </p>
      </div>
      <div className="category_container">
        <div className="category_container-child">
          <Link className="landing-link">
            <p className="paragraph">
              Exquisite and versatile, our collection of rings features
              captivating designs crafted from premium materials
            </p>
            <h2> Ring </h2>
          </Link>
        </div>
        <div className="category_container-child">
          <Link className="landing-link">
            <p className="paragraph">
              Exquisite and versatile, our collection of rings features
              captivating designs crafted from premium materials
            </p>{" "}
            <h2> Bracelets </h2>
          </Link>
        </div>
        <div className="category_container-child">
          <Link className="landing-link">
            <p className="paragraph">
              Exquisite and versatile, our collection of rings features
              captivating designs crafted from premium materials
            </p>{" "}
            <h2> Mangalsutra </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
