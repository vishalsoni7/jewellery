import React, { useState, useEffect } from "react";

import "../utils/address.css";

export const AddressForm = () => {
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    mobileNumber: "",
    houseNumber: "",
    area: "",
    pincode: "",
    city: "",
  });
  const [addedUser, setAddedUser] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...user, id: new Date().getTime().toString() };
    setAddedUser([...addedUser, newRecord]);
  };

  const removeAddress = (address) => {
    const filteredAddress = addedUser.filter((add) => {
      console.log("address", address.id, "add", add.id);
      return add.id !== address.id;
    });
    setAddedUser(filteredAddress);
  };

  useEffect(() => {
    console.log(addedUser);
  }, [addedUser]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="address_div">
          <div>
            <input
              required
              placeholder="Full Name"
              type="text"
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
              value={user.city}
              onChange={handleInput}
              name="city"
              id="city"
            />
          </div>
          <button type="submit">Add address</button>{" "}
        </div>
      </form>
      <div>
        {addedUser.map((item) => (
          <div>
            {" "}
            <ul>
              {" "}
              <li> {item.fullName} </li>{" "}
            </ul>
            <button onClick={() => removeAddress(item)} type="button">
              Remove Address
            </button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
