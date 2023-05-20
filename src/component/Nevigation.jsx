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
    <div>
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

{
  /* <div>
<nav className="navBar">
  <Link to="/" className="link">
    <h1 className="heading"> My Jwels </h1>
  </Link>
  <input
    placeholder="   search for product"
    className="search-bar"
    type="text"
  />
  <Link className="link" to="/wishlist">
    <FontAwesomeIcon icon={faHeart} size="xl" />
  </Link>
  <Link className="link" to="/cart">
    <FontAwesomeIcon icon={faCartShopping} size="xl" />
  </Link>
  <Link className="link" to="/user">
    <FontAwesomeIcon icon={faUser} size="xl" />
  </Link>
</nav>
</div> */
}
{
  /* <div className="navigation">
<div className="childA">
  <Link to="/" className="link">
    <h1 className="heading"> My Jwels </h1>
  </Link>
</div>

<div className="childB">
  <input
    placeholder="   search for product"
    className="search-bar"
    type="text"
  />
</div>

<div>
  <Link className="link" to="/wishlist">
    <FontAwesomeIcon icon={faHeart} size="xl" />
  </Link>
</div>

<div>
  <Link className="link" to="/cart">
    <FontAwesomeIcon icon={faCartShopping} size="xl" />
  </Link>
</div>

<div>
  <Link className="link" to="/user">
    <FontAwesomeIcon icon={faUser} size="xl" />
  </Link>
</div>
</div> */
}
