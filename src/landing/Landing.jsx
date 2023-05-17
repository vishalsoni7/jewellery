import React from "react";

import { Link } from "react-router-dom";

import "../landing/landing.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const Landing = () => {
  return (
    <div>
      <nav className="navBar">
        {" "}
        <h1> The Jwels </h1>
        <input
          placeholder="  search for product"
          className="search-bar"
          type="text"
        />
        <Link className="link" to="/wishlist">
          <FontAwesomeIcon icon={faHeart} size="xl" />
        </Link>
        <Link className="link" to="/cart">
          {" "}
          <FontAwesomeIcon icon={faCartShopping} size="xl" />
        </Link>
        <Link className="link" to="/user">
          {" "}
          <FontAwesomeIcon icon={faUser} size="xl" />
        </Link>
      </nav>
    </div>
  );
};
