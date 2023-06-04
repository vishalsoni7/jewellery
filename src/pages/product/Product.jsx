import { NavLink } from "react-router-dom";
import React, { useContext } from "react";

import "../product/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faHeart,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";

import { DataContext } from "../../Context/DataContext";
import { Filters } from "./FiterSection";
import { Loader } from "../../component/loader";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

export const Product = () => {
  const { addToCart, userToken, inCart } = useContext(CartContext);
  const { addToWishlist, inWishlist } = useContext(WishListContext);
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
                <NavLink
                  to={`/product/{_id}`}
                  onClick={() => singleProduct(_id)}
                >
                  <img className="products-img" src={img} alt="products" />
                </NavLink>
                <p>{name}</p>
                <p className="products-cart-weight"> Weight : {weight}</p>
                <p>₹ {price}</p>

                <div className="btn-div">
                  {inCart(_id) ? (
                    <button className="products-cart-button1">
                      <NavLink className="products-cart-link_button" to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} size="sm" /> Go
                        to Cart
                      </NavLink>{" "}
                    </button>
                  ) : (
                    <button
                      className="products-cart-button1"
                      onClick={() => {
                        addToCart(item, userToken);
                      }}
                    >
                      <FontAwesomeIcon icon={faCartPlus} size="sm" /> Add to
                      Cart
                    </button>
                  )}

                  {inWishlist(_id) ? (
                    <button className="products-cart-button2">
                      <NavLink
                        className="products-cart-link_button"
                        to="/wishlist"
                      >
                        <FontAwesomeIcon icon={faHeart} size="sm" /> Go to
                        Wishlist
                      </NavLink>
                    </button>
                  ) : (
                    <button
                      onClick={() => addToWishlist(item, userToken)}
                      className="products-cart-button2"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faHeart} size="sm" /> Ad to
                      Wishlist
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
