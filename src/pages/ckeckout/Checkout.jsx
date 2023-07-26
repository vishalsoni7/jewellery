import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../../Context/AddressContext";
import { CartContext } from "../../Context/CartContext";

import "../ckeckout/checkout.css";

export const CheckOut = () => {
  const { totalPrice, discount, discountedPrice, itemsInCart, cart } =
    useContext(CartContext);
  const { addedUser, handleAddressSelect, selectedAddress, orderAddress } =
    useContext(AddressContext);

  const navigate = useNavigate();

  return (
    <>
      <h2 className="checkOut_address_heading"> CHECK OUT </h2>
      <div className="checkOut_address_parent_div">
        <div>
          {addedUser.map((item, index) => (
            <div className="checkOut_address">
              <div key={item.id} className="checkOut_div1">
                <input
                  onChange={() => handleAddressSelect(index)}
                  checked={index === selectedAddress}
                  name="selectaddress"
                  type="radio"
                />
                <h3>{item.fullName}</h3>
              </div>
              <div className="checkOut_div2">
                <p> {item.houseNumber} </p> <p> {item.area} </p>
                <p> {item.city} </p>
              </div>
              <div className="checkOut_div2">
                <p> {item.mobileNumber} </p>
                <p> {item.pincode} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout_parent_div">
          <div className="checkout_cart_div">
            <h3 className="checkout_heading"> ORDER DETAILS </h3>
            <div>
              <div className="checkout_div">
                <p> Item </p> <p> Qty </p>
              </div>

              {Object.keys(itemsInCart).map((item, index) => (
                <div key={index} className="checkout_div">
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
              <p> Discount </p> <p> ₹ {discount.toFixed(2)} </p>
            </div>

            <div className="checkout_div">
              <p>Total Amount </p> <p> ₹ {discountedPrice.toFixed(2)}</p>
            </div>

            <h3 className="checkout_heading"> DELIVERY TO </h3>

            <div>
              <div className="selected_Address">
                <h3>{orderAddress?.fullName}</h3>
                <p> {orderAddress?.houseNumber} </p>
              </div>
              <div className="selected_Address1">
                <p> {orderAddress?.area} </p>
                <p> {orderAddress?.city} </p>
                <p> {orderAddress?.mobileNumber} </p>
                <p> {orderAddress?.pincode} </p>
              </div>
            </div>

            <button
              onClick={() => {
                toast.success("Order placed Successfully.", {
                  style: {
                    fontSize: "large",
                    padding: ".5rem",
                    background: "#252525",
                    color: "whitesmoke",
                  },
                });
                navigate("/");
              }}
              className="checkout_btn"
            >
              {" "}
              PLACE ORDER{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
