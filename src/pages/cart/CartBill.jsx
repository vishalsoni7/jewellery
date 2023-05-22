import React from "react";

import "../cart/cartbill.css";

export const CartBill = () => {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <h1> Have Coupon ? </h1>
        </li>
        <li>
          <button> Apply </button>
        </li>
        <li> Price Details</li>
        <li>Price</li>
        <li>Discount</li>
        <li>Coupon Discount</li>
        <li>Total Amount</li>
      </ul>
    </div>
  );
};
