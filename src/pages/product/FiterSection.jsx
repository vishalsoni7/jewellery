import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

import "../product/filtersection.css";

export const Filters = () => {
  const {
    state: { productData, clickedCategory, maxRating, rating, minRating },
    dispatch,
  } = useContext(DataContext);

  const categoriesArray = productData.reduce(
    (acc, { category }) => (acc.includes(category) ? acc : [...acc, category]),
    []
  );

  console.log(productData, clickedCategory, maxRating, rating, minRating);

  return (
    <div className="filter-mainDiv">
      <div className="filter-heading">
        <h4>Filters</h4>
        <button
          onClick={() => dispatch({ type: "CLEAR" })}
          class="filter-button"
        >
          Clear
        </button>
      </div>

      <div>
        <h4> Ratings {rating} </h4>
        <div className="filter-price">
          <p> 1 ★ </p> <p> 2 ★ </p> <p> 3 ★ </p> <p> 4 ★ </p> <p> 5 ★ </p>
        </div>
        <input
          className="filter-range"
          type="range"
          name="rating"
          min={minRating}
          max={maxRating}
          value={rating}
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
          }
          step="1"
        />
      </div>

      <div>
        <h4>Category</h4>
        <div className="filter-checkbox">
          {categoriesArray.map((cat) => (
            <div>
              <input
                checked={clickedCategory.includes(cat)}
                onChange={() =>
                  dispatch({ type: "FILTER_CATEGORY", payload: cat })
                }
                type="checkbox"
              />
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4> Sort By </h4>

        <div className="filter-checkbox">
          {" "}
          <label>
            <input
              onClick={() =>
                dispatch({ type: "SORTBYPRICE", payload: "highToLow" })
              }
              type="radio"
              name="sort"
            />{" "}
            Price - High to Low
          </label>
          <label>
            <input
              onClick={() =>
                dispatch({ type: "SORTBYPRICE", payload: "lowToHigh" })
              }
              type="radio"
              name="sort"
            />{" "}
            Price - Low to High
          </label>
        </div>
      </div>
    </div>
  );
};
