import "../product/product.css";

import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { NavLink } from "react-router-dom";
import { Filters } from "./FiterSection";
//import { Loader } from "../../component/loader";

export const Product = () => {
  const { singleProduct } = useContext(DataContext);
  const {
    state: { filterData },
  } = useContext(DataContext);

  return (
    <div>
      <Filters />

      <div className="products-maiDiv">
        {filterData.map((item) => {
          const { name, price, img, id, weight } = item;
          return (
            <div key={id} class="products-cart">
              <NavLink to="/product" onClick={() => singleProduct(id)}>
                <img className="products-img" src={img} alt="products" />
              </NavLink>{" "}
              <p>{name}</p>
              <p className="products-cart-weight"> Weight : {weight}</p>
              <p>₹ {price}</p>
              <div className="btn-div">
                {" "}
                <button className="products-cart-button1"> Add to cart </button>
                <button className="products-cart-button2">
                  {" "}
                  Add to Wishlist{" "}
                </button>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
