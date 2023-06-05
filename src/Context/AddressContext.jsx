import React from "react";

import { createContext, useState, useEffect } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
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
      return add.id !== address.id;
    });
    setAddedUser(filteredAddress);
  };

  useEffect(() => {}, [addedUser]);

  const values = {
    user,
    setUser,
    addedUser,
    handleInput,
    handleSubmit,
    setAddedUser,
    removeAddress,
  };
  return (
    <AddressContext.Provider value={values}>{children}</AddressContext.Provider>
  );
};
