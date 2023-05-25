import React from "react";
import { Link } from "react-router-dom";

import "../landing/landing.css";

import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { SlideShow } from "../component/SlideShow.jsx";
import { Footer } from "../component/Footer";

export const Landing = () => {
  const {
    state: { category },
  } = useContext(DataContext);

  return (
    <div>
      <SlideShow />
      <div className="landing_parent_Div">
        {" "}
        <div>
          <h1 className="category-heading"> Top Collections</h1>
          <p className="category-description">
            Our jewelry categories include stunning engagement rings, delicate
            charm bracelets and timeless mangalsutra, ensuring there's something
            exquisite for every taste.
          </p>
        </div>
        {category.map((item) => {
          const { description, categoryName, _id } = item;

          return (
            <div key={_id} className="landing-container">
              <div className="landing-mainDiv">
                <div className="category_container">
                  <div className="category_container-child">
                    <Link to="/products" className="landing-link">
                      <p className="paragraph">{description}</p>
                      <h1> {categoryName} </h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </div>

      <Footer />
    </div>
  );
};
