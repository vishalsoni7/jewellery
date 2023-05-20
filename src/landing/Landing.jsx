import React from "react";

import { Link } from "react-router-dom";

import "../landing/landing.css";

import { SlideShow } from "../component/SlideShow.jsx";
import { Footer } from "../component/Footer";

export const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-mainDiv">
        <SlideShow />

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
              <h2> RING </h2>
            </Link>
          </div>
          <div className="category_container-child">
            <Link className="landing-link">
              <p className="paragraph">
                Adorn your wrist with our captivating bracelet collection,
                featuring delicate chains, sparkling tennis bracelets.
              </p>{" "}
              <h2> BRACELETS </h2>
            </Link>
          </div>
          <div className="category_container-child">
            <Link className="landing-link">
              <p className="paragraph">
                Discover the timeless elegance of our Mangalsutra collection,
                showcasing intricately crafted designs.
              </p>{" "}
              <h2> MANGALSUTRA </h2>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
