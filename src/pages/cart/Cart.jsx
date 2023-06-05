import React, { useContext } from "react";

import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

import "../cart/cart.css";

import { CartBill } from "./CartBill";

export const Cart = () => {
  const { userToken } = useContext(AuthContext);
  const { addToWishlist } = useContext(WishListContext);
  const { cart, removeFromCart, handleQnty } = useContext(CartContext);
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
          {cart.length ? (
            <>
              {" "}
              <h2>
                My Cart <sup> {`(${cart.length})`} </sup>
              </h2>{" "}
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
                      <div>
                        {" "}
                        <button
                          onClick={() => {
                            addToWishlist(item, userToken);
                            removeFromCart(_id, userToken);
                          }}
                          className="mycart-btn"
                        >
                          {" "}
                          Move to Wishlist{" "}
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
            </>
          ) : (
            <h2 className="empty">
              Your Cart Is Empty !{" "}
              <span role="img" aria-label="sad">
                ☹️
              </span>{" "}
            </h2>
          )}
        </div>
      </div>{" "}
      {cart.length ? <CartBill /> : null}
      <InnerFooter />
    </div>
  );
};
