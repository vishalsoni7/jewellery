import React, { useContext, useState } from "react";
import { AddressContext } from "../../Context/AddressContext";
import { CartContext } from "../../Context/CartContext";

import "../ckeckout/checkout.css";

export const CheckOut = () => {
  const {
    totalPrice,
    discount,
    discountedPrice,
    itemsInCart,
    cart,
  } = useContext(CartContext);
  const { addedUser } = useContext(AddressContext);
  // const [selectedAdd, setSelectedAdd] = useState();

  return (
    <div>
      <div>
        {" "}
        {addedUser.map((item, index) => (
          <div>
            <input name="address" type="radio" />
            <p> {item.fullName} </p>
          </div>
        ))}
      </div>
      <h2>Check Out </h2>{" "}
      <div className="checkout_parent_div">
        <div className="checkout_cart_div">
          <h3 className="checkout_heading"> ORDER DETAILS </h3>
          <div>
            <div className="checkout_div">
              <p> Item </p> <p> Qty </p>{" "}
            </div>

            {Object.keys(itemsInCart).map((item) => (
              <div className="checkout_div">
                <p> {item} </p> <p> {itemsInCart[item]} </p>
              </div>
            ))}
          </div>
          <h3 className="checkout_heading">PRICE DETAILS</h3>

          <div className="checkout_div">
            <p>Price ({cart.length} Item) </p> <p> ₹ {totalPrice}</p>
          </div>
          <div className="checkout_div">
            <p> Delivery Charges </p> <p> FREE </p>
          </div>

          <div className="checkout_div">
            <p> Discount </p> <p> ₹ {discount.toFixed(2)} </p>{" "}
          </div>

          <div className="checkout_div">
            <p>Total Amount </p> <p> ₹ {discountedPrice.toFixed(2)}</p>{" "}
          </div>

          <h3 className="checkout_heading"> DELIVERY TO </h3>
          <button className="checkout_btn"> PLACE ORDER </button>
        </div>
      </div>
    </div>
  );
};
