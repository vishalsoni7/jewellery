import React from "react";
import { Footer } from "../../component/Footer";

import "../wishlist/wishlist.css";

export const mails = [
  {
    id: 1,
    name: "Gold ring",
    by: "Jwels",
    category: "Ring",
    price: 9.99,
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "Jwels",
    category: "Ring",
    price: 9.99,
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
];

export const WishList = () => {
  return (
    <div>
      <div className="mainDiv">
        <h1> My wish list </h1>
        {mails.map((item) => (
          <div className="card">
            <div className="cart-div">
              <img
                className="wishlist-img"
                src="./LR00055-6__1450266466.jpg"
                alt="img"
              />
            </div>
            <div className="wishlist-data">
              <p className="wishlist-h2"> {item.name} </p>
              <p> By: {item.by} </p>
              <p> Price: {item.price} ₹</p>
              <p> {item.category} </p>

              <button className="wishlist-button"> Move to Cart </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
