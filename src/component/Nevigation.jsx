import React from "react";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

import "../component/nevigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Nevigation = () => {
  const { dispatch } = useContext(DataContext);

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
            placeholder=" 🔍 search for product"
            className="search-bar"
            type="text"
          />
        </div>

        <div className="div-C">
          <NavLink className="link" to="/wishlist">
            <FontAwesomeIcon icon={faHeart} size="xl" />
          </NavLink>
        </div>

        <div className="div-D">
          <NavLink className="link" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </NavLink>
        </div>

        <div className="div-E">
          <NavLink className="link" to="/signin">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
