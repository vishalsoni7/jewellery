import React, { useContext } from "react";

import "../utils/address.css";

import { AddressContext } from "../Context/AddressContext";

export const AddressForm = () => {
  const { user, handleInput, handleSubmit } = useContext(AddressContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3> Add New Address </h3>
      <form onSubmit={handleSubmit}>
        <div className="address_div">
          <div>
            <input
              required
              placeholder="Full Name"
              type="text"
              value={user.fullName}
              onChange={handleInput}
              name="fullName"
              id="fullName"
            />
          </div>
          <div>
            <input
              required
              placeholder="Mobile Number"
              type="tel"
              value={user.mobileNumber}
              onChange={handleInput}
              name="mobileNumber"
              id="mobileNumber"
            />
          </div>
          <div>
            <input
              required
              placeholder="House Number"
              type="text"
              onChange={handleInput}
              value={user.houseNumber}
              name="houseNumber"
              id="houseNumber"
            />
          </div>
          <div>
            <input
              required
              placeholder="Area"
              type="text"
              value={user.area}
              onChange={handleInput}
              name="area"
              id="area"
            />
          </div>
          <div>
            <input
              required
              placeholder="Pincode"
              type="tel"
              value={user.pincode}
              onChange={handleInput}
              name="pincode"
              id="pincode"
            />
          </div>
          <div>
            <input
              required
              placeholder="City"
              type="text"
              value={user.city}
              onChange={handleInput}
              name="city"
              id="city"
            />
          </div>
          <button type="submit">Add address</button>{" "}
        </div>
      </form>
    </div>
  );
};
