import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

import "../product/filtersection.css";

export const Filters = () => {
  let {
    state: { clickedCategory, sortRatings },
    dispatch,
  } = useContext(DataContext);

  console.log(clickedCategory);

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
        <div className="filter-price">
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
        <input
          type="checkbox"
          checked={clickedCategory.RINGS}
          onChange={(e) =>
            dispatch({ type: "FILTER_RINGS", payload: e.target.checked })
          }
        />
        Rings
        <input
          type="checkbox"
          checked={clickedCategory.BRACELETS}
          onChange={(e) =>
            dispatch({ type: "FILTER_BRACELETS", payload: e.target.checked })
          }
        />{" "}
        Baracelets
        <input
          type="checkbox"
          checked={clickedCategory.MANGALSUTRAS}
          onChange={(e) =>
            dispatch({ type: "FILTER_MANGALSUTRAS", payload: e.target.checked })
          }
        />{" "}
        Mangalsutra
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
            />{" "}
            Price - Low to High
          </label>
        </div>
      </div>
    </div>
  );
};

// const categoriesArray = productData.reduce(
//   (acc, { category }) => (acc.includes(category) ? acc : [...acc, category]),
//   []
// );

// const [ring, setRing] = useState(false);
// const [bracelet, setBracelet] = useState(false);
// const [mangalsutra, setMangalsutra] = useState(false);

// if (ring) {
//   filterData = filterData.filter(({ Ring }) => Ring);
// }

// if (bracelet) {
//   filterData = filterData.filter(({ Bracelet }) => Bracelet);
// }

// if (mangalsutra) {
//   filterData = filterData.filter(({ Mangalsutra }) => Mangalsutra);
// }

// const handleRing = () => {
//   setRing((pre) => !pre);
// };

// const handleBracelet = () => {
//   setBracelet((pre) => !pre);
// };

// const handleMangalsutra = () => {
//   setMangalsutra((pre) => !pre);
// };

/* <div>
        <h4>Category</h4>
        <div className="filter-checkbox">
          <input onChange={handleRing} type="checkbox" /> Rings
          <input onChange={handleBracelet} type="checkbox" /> Bracelets
          <input onChange={handleMangalsutra} type="checkbox" /> Mangalsutra
        </div>

        <div className="filter-checkbox">
          {categoriesArray.map((cat) => (
            <div>
              <input
                checked={clickedCategory.RINGS}
                onChange={() =>
                  dispatch({ type: cat.categoryName, payload: cat })
                }
                type="checkbox"
              />
              {""} {cat}
            </div>
          ))}
        </div>
      </div> */
