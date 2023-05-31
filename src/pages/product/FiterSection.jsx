import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

import "../product/filtersection.css";

export const Filters = () => {
  let {
    state: { sortRatings, sortByPrice, category, selectedCategories },
    dispatch,
  } = useContext(DataContext);

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
        <h4> Ratings </h4>
        <div className="filter_ratings">
          <p> 1 ★ </p> <p> 2 ★ </p> <p> 3 ★ </p> <p> 4 ★ </p> <p> 5 ★ </p>
        </div>
        <input
          className="filter-range"
          type="range"
          name="rating"
          min="1"
          max="5"
          value={sortRatings}
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_RATING", payload: e.target.value })
          }
          step="1"
        />
      </div>

      <div className="filter-checkbox">
        <h4>Categories</h4>
        {category.map((item) => {
          return (
            <div>
              <input
                type="checkbox"
                checked={selectedCategories.includes(item.categoryName)}
                onChange={() =>
                  dispatch({
                    type: "TOGGLE_SELECTED_CATEGORY",
                    payload: item.categoryName,
                  })
                }
              />{" "}
              {item.categoryName}
            </div>
          );
        })}
      </div>

      <div>
        <h4> Sort By </h4>
        <div className="filter-sorting">
          <label>
            <input
              onChange={() =>
                dispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
              }
              type="radio"
              name="sort"
              checked={sortByPrice === "" ? false : null}
            />{" "}
            Price - High to Low
          </label>
          <label>
            <input
              onChange={() =>
                dispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
              }
              type="radio"
              name="sort"
              checked={sortByPrice === "" ? false : null}
            />{" "}
            Price - Low to High
          </label>
        </div>
      </div>
    </div>
  );
};

/* <div>
        <h4>Category</h4>
        <div className="filter-checkbox">
          <input onChange={handleRing} type="checkbox" /> Rings
          <input onChange={handleBracelet} type="checkbox" /> Bracelets
          <input onChange={handleMangalsutra} type="checkbox" /> Mangalsutra
        </div>

      //   <div className="filter-checkbox">
      //     {categoriesArray.map((cat) => (
      //       <div>
      //         <input
      //           checked={clickedCategory.RINGS}
      //           onChange={() =>
      //             dispatch({ type: cat.categoryName, payload: cat })
      //           }
      //           type="checkbox"
      //         />
      //         {""} {cat}
      //       </div>
      //     ))}
      //   </div>
      // </div> */
