import React from "react";

import "../product/filtersection.css";

export const Filters = () => {
  return (
    <div className="filter-mainDiv">
      <div className="filter-heading">
        <h4>Filters</h4>
        <button class="filter-button">Clear</button>
      </div>

      <div>
        <h4> Price </h4>
        <div className="filter-price">
          <p> 10 k </p> <p> 30 k </p> <p> 50 k </p> <p> 70 k</p>
        </div>
        <input className="filter-range" type="range" />
      </div>

      <div>
        <h4>Category</h4>

        <div className="filter-checkbox">
          <label>
            <input type="checkbox" />
            <span> RING</span>
          </label>
          <label>
            <input type="checkbox" />
            <span> BRACELET </span>
          </label>
          <label>
            <input type="checkbox" />
            <span> MANGALSUTRA </span>
          </label>
        </div>
      </div>

      <div>
        <h4> Rating </h4>

        <div className="filter-checkbox">
          <label>
            <input type="radio" name="rating" /> 4 Star & Above
          </label>

          <label>
            <input type="radio" name="rating" /> 3 Star & Above
          </label>
          <label>
            <input type="radio" name="rating" /> 2 Star & Above
          </label>
          <label>
            <input type="radio" name="rating" /> 1 Star & Above
          </label>
        </div>
      </div>

      <div>
        <h4> Sort By </h4>

        <div className="filter-checkbox">
          {" "}
          <label>
            <input type="radio" name="sort" /> Price - High to Low
          </label>
          <label>
            <input type="radio" name="sort" /> Price - Low to High
          </label>
        </div>
      </div>
    </div>
  );
};
