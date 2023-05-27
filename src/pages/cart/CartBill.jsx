import React from "react";

import "../cart/cartbill.css";

export const CartBill = () => {
  return (
    <div>
      <div className="card_bill">
        {/* <h3> Have a Coupon? </h3> */}
        <h2>Price Breakup</h2>
        <p> Price </p>
        <p> Discount </p>
        <p> Delivery Charges </p>

        <p className="bill_total">Total Amount</p>
        <button className="cart_bill_button">Check Out</button>
      </div>
    </div>
  );
};
