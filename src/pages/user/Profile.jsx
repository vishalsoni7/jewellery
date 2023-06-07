import React, { useContext, useState } from "react";

import "../user/user.css";

import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { SignIn } from "../signin/SignIn";
import { AddressForm } from "../../utils/AddressForm";
import { AddressContext } from "../../Context/AddressContext";

export const User = () => {
  const { signOut, auth } = useContext(AuthContext);
  const {
    addedUser,
    isAddressModal,
    setIsAddressModal,
    deleteAddress,
    handleEditAddress,
  } = useContext(AddressContext);

  const user = JSON.parse(localStorage.getItem("signUpUserDetails"));

  return (
    <div>
      {!auth.isLoggedIn ? (
        <SignIn />
      ) : (
        <div className="user_div">
          <img src="../user2.png" alt="profile" className="user_img" />
          <h2>
            Name : {user.firstName} {user.lastName}
          </h2>
          <h3> Email : {user.email} </h3>
          <>
            {addedUser.map((item, index) => (
              <div key={item.id} className="address_list">
                <h3>{item.fullName}</h3>
                <p> {item.mobileNumber} </p>
                <p> {item.houseNumber} </p>
                <div className="address_list_child_div">
                  <p> {item.area} </p>
                  <p> {item.city} </p>
                  <p> {item.pincode} </p>
                  <div>
                    <button
                      className="address_list_delete_btn"
                      onClick={() => deleteAddress(item)}
                    >
                      Delete{" "}
                    </button>
                    <button
                      onClick={() => handleEditAddress(index)}
                      className="address_list_edit_btn"
                    >
                      {" "}
                      Edit{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
          <div>
            <button className="user_button" onClick={signOut}>
              Sign Out{" "}
            </button>{" "}
            <button
              onClick={() => {
                setIsAddressModal(true);
              }}
              className="user_button"
            >
              Add address
            </button>{" "}
          </div>
        </div>
      )}

      {isAddressModal && (
        <div
          onClick={() => setIsAddressModal(false)}
          className="address_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="address_modal_outer_container"
          >
            <AddressForm edit={true} />
          </div>
        </div>
      )}
      <InnerFooter />
    </div>
  );
};
