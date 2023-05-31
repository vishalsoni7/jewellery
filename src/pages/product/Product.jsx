import { NavLink } from "react-router-dom";
import React, { useContext } from "react";

import "../product/product.css";

import { DataContext } from "../../Context/DataContext";
import { Filters } from "./FiterSection";
import { Loader } from "../../component/loader";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

export const Product = () => {
  const { addToCart, userToken } = useContext(CartContext);
  const { addToWishlist } = useContext(WishListContext);
  const { singleProduct } = useContext(DataContext);
  const {
    state: { filterData },
  } = useContext(DataContext);

  return (
    <div>
      <Filters />
      {filterData.length === 0 ? (
        <Loader />
      ) : (
        <div className="products-maiDiv">
          {filterData.map((item) => {
            const { name, price, img, _id, weight } = item;
            return (
              <div key={_id} class="products-cart">
                <NavLink to="/product" onClick={() => singleProduct(_id)}>
                  <img className="products-img" src={img} alt="products" />
                </NavLink>
                <p>{name}</p>
                <p className="products-cart-weight"> Weight : {weight}</p>
                <p>₹ {price}</p>
                <div className="btn-div">
                  <button
                    onClick={() => addToCart(item, userToken)}
                    className="products-cart-button1"
                  >
                    Add to cart
                  </button>

                  <button
                    onClick={() => addToWishlist(item, userToken)}
                    className="products-cart-button2"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
