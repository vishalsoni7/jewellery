import React from "react";

import "../cart/cart.css";

import { CartBill } from "./CartBill";

export const Cart = () => {
  return (
    <div>
      <CartBill />
      {/* <div className="cart-mainDiv">
        <h1> My Cart</h1>
        {mails.map((item) => (
          <div className="cart-card">
            <div className="cart-img-div">
              <img className="cart-img" src="./LR00055-6__1450266466.jpg" />
            </div>
            <div className="cart-description">
              <div className="description">
                <h2> {item.name} </h2>
                <p>By: {item.by} </p>
                <p>Price: {item.price} ₹ </p>
                <p>Weight: {item.weight} </p>
              </div>

              <div>
                <button> - </button>
                counts
                <button> + </button>
              </div>

              <div>
                <button> REMOVE </button>
                <button>ADD TO WISH LIST </button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
