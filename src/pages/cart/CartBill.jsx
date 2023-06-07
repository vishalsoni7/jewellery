import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import "../cart/cartbill.css";

export const CartBill = () => {
  const { cart, totalPrice, discount, discountedPrice } =
    useContext(CartContext);

  return (
    <div>
      <div className="card_bill">
        <h2>Price Cart</h2>
        <div className="cartbill_checkout_div">
          <p>Price ({cart.length} Item) </p> <p>₹ {totalPrice}</p>
        </div>
        <div className="cartbill_checkout_div">
          <p> Delivery Charges </p> <p> FREE </p>
        </div>

        <div className="cartbill_checkout_div">
          <p>Discount </p> <p>₹ {discount.toFixed(2)} </p>
        </div>
        <div className="bill_total">
          <h3>Total Amount </h3> <h3>₹ {discountedPrice.toFixed(2)} </h3>
        </div>
        <h3 className="cartbill_dicsount">
          {" "}
          You will save ₹ {discount.toFixed(2)}{" "}
        </h3>
        <NavLink to="/checkout">
          <button className="cart_bill_button">Check Out</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};
