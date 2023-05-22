import React from "react";
import { Link } from "react-router-dom";

import "../component/nevigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Nevigation = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "100",
      }}
    >
      <nav className="navBar">
        <div className="div-A">
          <Link to="/" className="link">
            <h1 className="heading"> Jwels </h1>
          </Link>
        </div>

        <div className="div-B">
          <input
            placeholder="   search for product"
            className="search-bar"
            type="text"
          />
        </div>

        <div className="div-C">
          <Link className="link" to="/wishlist">
            <FontAwesomeIcon icon={faHeart} size="xl" />
          </Link>
        </div>

        <div className="div-D">
          <Link className="link" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </Link>
        </div>

        <div className="div-E">
          <Link className="link" to="/user">
            <FontAwesomeIcon icon={faUser} size="xl" />
          </Link>
        </div>
      </nav>
    </div>
  );
};
