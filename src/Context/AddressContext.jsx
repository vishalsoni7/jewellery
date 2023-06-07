import React from "react";

import { createContext, useState, useEffect } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: "",
    mobileNumber: "",
    houseNumber: "",
    area: "",
    city: "",
    pincode: "",
  });

  const [addedUser, setAddedUser] = useState([]);

  const [isAddressModal, setIsAddressModal] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState(0);

  const orderAddress = addedUser[selectedAddress];

  const handleAddressSelect = (index) => {
    setSelectedAddress(index);
  };

  const handleEditAddress = (index) => {
    const clickedAddress = addedUser[index];
    setAddedUser(addedUser.filter((_, i) => i !== index));
    setSelectedAddress(0);
    setUser(clickedAddress);
    setIsAddressModal(true);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...user, id: new Date().getTime().toString() };
    setAddedUser([...addedUser, newRecord]);
    setUser({
      id: "",
      fullName: "",
      mobileNumber: "",
      houseNumber: "",
      area: "",
      city: "",
      pincode: "",
    });
    setIsAddressModal(false);
  };

  const deleteAddress = (address) => {
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
    deleteAddress,
    isAddressModal,
    setIsAddressModal,
    handleEditAddress,
    handleAddressSelect,
    orderAddress,
    selectedAddress,
  };
  return (
    <AddressContext.Provider value={values}>{children}</AddressContext.Provider>
  );
};
