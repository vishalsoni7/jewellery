import React from "react";
import { Link } from "react-router-dom";

import "../component/nevigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const Nevigation = () => {
  return (
    <div>
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