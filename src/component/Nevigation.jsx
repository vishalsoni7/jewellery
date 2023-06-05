import React from "react";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { CartContext } from "../Context/CartContext";
import { WishListContext } from "../Context/WishListContext";

import "../component/nevigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Nevigation = () => {
  const { dispatch } = useContext(DataContext);
  const { wishlist } = useContext(WishListContext);
  const { cart } = useContext(CartContext);

  return (
    <div className="navBar_mainDiv">
      <nav className="navBar">
        <div className="div-A">
          <NavLink to="/" className="link">
            <h1 className="heading"> Jwels </h1>
          </NavLink>
        </div>

        <div className="div-B">
          <input
            onChange={(e) =>
              dispatch({ type: "SEARCHED_DATA", payload: e.target.value })
            }
            placeholder=" 🔍 Search for product"
            className="search-bar"
            type="text"
          />
        </div>

        <div className="div-C">
          <NavLink className="link" to="/wishlist">
            <FontAwesomeIcon icon={faHeart} size="xl" />{" "}
            <sup className="length">
              {" "}
              {wishlist.length ? wishlist.length : null}
            </sup>
          </NavLink>
        </div>

        <div className="div-D">
          <NavLink className="link" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
            <sup className="length"> {cart.length ? cart.length : null}</sup>
          </NavLink>
        </div>

        <div className="div-E">
          <NavLink className="link" to="/user">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
