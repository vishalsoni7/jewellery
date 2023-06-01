import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import "../cart/cartbill.css";

export const CartBill = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className="card_bill">
        <h2>Price Cart</h2>

        {cart.map((item) => (
          <div>
            {" "}
            <p> Price : {item.price} </p>
            <p> Delivery Charges : Free </p>
            <p> Discount </p>
          </div>
        ))}

        <p className="bill_total">Total Amount</p>
        <NavLink to="/checkout">
          {" "}
          <button className="cart_bill_button">Check Out</button>{" "}
        </NavLink>
      </div>
    </div>
  );
};
