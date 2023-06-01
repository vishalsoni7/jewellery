import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

import "../cart/cart.css";

import { CartBill } from "./CartBill";

export const Cart = () => {
  const { addToWishlist } = useContext(WishListContext);
  const { cart, removeFromCart, userToken, handleQnty } = useContext(
    CartContext
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-evenly",
      }}
    >
      <div className="mycart-parent-div">
        <div className="mycart-content">
          <h2>
            My Cart <sup> {`(${cart.length})`} </sup>
          </h2>
          {cart.map((item) => {
            const { _id, name, img, by, price, weight, qty } = item;
            return (
              <div key={_id} className="mycart-card">
                <img className="mycart-img" src={img} alt="products" />
                <div>
                  <h2> {name} </h2>
                  <p className="mycart-p"> By : {by} </p>
                  <p> Weight: {weight} </p>
                  <p> Price: {price} ₹</p>

                  <button
                    onClick={() => handleQnty("decrement", _id, userToken)}
                    className="mycart-quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity"> {qty} </span>

                  <button
                    onClick={() => handleQnty("increment", _id, userToken)}
                    className="mycart-quantity-btn"
                  >
                    +
                  </button>
                  {/* <br /> */}
                  <div>
                    {" "}
                    <button
                      onClick={() => addToWishlist(item, userToken)}
                      className="mycart-btn"
                    >
                      {" "}
                      Move to Wish list{" "}
                    </button>
                    <button
                      onClick={() => removeFromCart(_id, userToken)}
                      className="remove-mycart-btn"
                    >
                      Remove
                    </button>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div>
        {" "}
        <CartBill />{" "}
      </div>
    </div>
  );
};
