import React from "react";

import "../wishlist/wishlist.css";

export const mails = [
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
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
    by: "My Jwels",
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
    by: "My Jwels",
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
        {" "}
        <h1 className="heading"> My wish list </h1>
        {mails.map((item) => (
          <div className="card">
            <img
              className="wishlist-img"
              src="./LR00055-6__1450266466.jpg"
              alt="img"
            />
            <h3>Product: {item.name} </h3>
            <p> By: {item.by} </p>
            <p> Price: {item.price} ₹</p>
            <button> Move to Cart </button>
          </div>
        ))}
      </div>
    </div>
  );
};
