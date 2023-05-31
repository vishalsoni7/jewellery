import React from "react";
import { NavLink } from "react-router-dom";

import "../cart/cartbill.css";

export const CartBill = () => {
  return (
    <div>
      <div className="card_bill">
        <h2>Price Breakup</h2>
        <p> Price </p>
        <p> Discount </p>
        <p> Delivery Charges </p>

        <p className="bill_total">Total Amount</p>
        <NavLink to="/checkout">
          {" "}
          <button className="cart_bill_button">Check Out</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};
