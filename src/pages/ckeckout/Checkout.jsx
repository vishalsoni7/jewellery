import React from "react";

import "../ckeckout/checkout.css";

export const CheckOut = () => {
  return (
    <div>
      {" "}
      <h2>Check Out </h2>{" "}
      <div className="checkout_parent_div">
        <div className="checkout_cart_div">
          <h3 className="checkout_heading"> ORDER DETAILS </h3>
          <div className="checkout_div">
            <p> Item </p>
            <p> Qty </p>
          </div>
          <h3 className="checkout_heading">PRICE DETAILS</h3>
          <div className="checkout_price">
            <p> Price </p>
            <p> Delivery Charges</p>
            <p> Discount </p>
            <p>Total Amount </p>
          </div>
          <h3 className="checkout_heading"> DELIVERY TO </h3>
          <button className="checkout_btn"> PLACE ORDER </button>
        </div>
      </div>
    </div>
  );
};
