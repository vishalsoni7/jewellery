import React, { useContext } from "react";

import "../utils/address.css";

import { AddressContext } from "../Context/AddressContext";

export const AddressForm = () => {
  const {
    user,
    handleInput,
    handleSubmit,
    // addedUser,
    // removeAddress,
  } = useContext(AddressContext);
  return (
    <>
      {" "}
      <h2
        style={{
          margin: "1rem",
          backgroundColor: "whitesmoke",
          color: "#252525",
          borderRadius: "5px",
          width: "50%",
        }}
      >
        {" "}
        ADD NEW ADDRESS
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
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
        </div>{" "}
        {/* <div>
          {" "}
          {addedUser.map((item) => (
            <div
              style={{
                border: "2px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "35rem",
              }}
            >
              <p> {item.fullName} </p>
              <p> {item.houseNumber} </p>
              <p> {item.area} </p>
              <p> {item.pincode} </p>
              <p> {item.city} </p>
              <p> {item.mobileNumber} </p>
              <button onClick={() => removeAddress(item)}>
                {" "}
                Remove Address{" "}
              </button>
            </div>
          ))}
        </div> */}
      </div>{" "}
    </>
  );
};
