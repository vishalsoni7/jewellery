import React from "react";

import "../cart/cart.css";

import { CartBill } from "./CartBill";
export const mails = [
  {
    _id: 1,
    name: "The Naveah Diamond Ring",
    img:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/l/LR00055-6__1450266466.jpg",
    by: "Jwels",
    category: "Ring",
    price: 10246,
    weight: "0.84 g",
    metal: "Yellow Gold",
    GST: "3 %",
    size: 7,
    rating: 5,
  },
  {
    _id: 2,
    name: "The Blink Diamond Ring",
    img:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/l/LR02646-6_513.jpg",
    by: "Jwels",
    category: "Ring",
    price: 29089,
    weight: "2.53 g",
    metal: "Yellow Gold",
    GST: "3 %",
    size: 7.5,
    rating: 4,
  },
  {
    _id: 2,
    name: "The Blink Diamond Ring",
    img:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/l/LR02646-6_513.jpg",
    by: "Jwels",
    category: "Ring",
    price: 29089,
    weight: "2.53 g",
    metal: "Yellow Gold",
    GST: "3 %",
    size: 7.5,
    rating: 4,
  },
];

export const Cart = () => {
  return (
    <div className="mycart-parent-div">
      <div className="mycart-content">
        <h2>
          My Cart <sup> {`(${mails.length})`} </sup>
        </h2>
        {mails.map((item) => {
          const { _id, name, img, by, price, weight } = item;
          return (
            <div key={_id} className="mycart-card">
              <img className="mycart-img" src={img} alt="products" />
              <div>
                <h2> {name} </h2>
                <p className="mycart-p"> Weight: {weight} </p>
                <p> Price: {price} ₹</p>

                <button className="mycart-quantity-btn"> - </button>
                <span className="quantity"> {mails.length} </span>

                <button className="mycart-quantity-btn"> + </button>
                <br />
                <button className="mycart-btn"> Move to Wish list </button>
                <button className="remove-mycart-btn">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
      <CartBill />
    </div>
  );
};
