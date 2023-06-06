import React, { useContext, useState } from "react";

import "../user/user.css";

import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { SignIn } from "../signin/SignIn";
// import { NavLink } from "react-router-dom";
import { AddressForm } from "../../utils/AddressForm";
import { AddressContext } from "../../Context/AddressContext";

export const User = () => {
  const { signOut, auth } = useContext(AuthContext);
  const { addedUser } = useContext(AddressContext);
  const [isAddressModal, setIsAddressModal] = useState(false);

  const user = JSON.parse(localStorage.getItem("signUpUserDetails"));

  return (
    <div>
      {!auth.isLoggedIn ? (
        <SignIn />
      ) : (
        <div className="user_div">
          {" "}
          <img src="../user2.png" alt="profile" className="user_img" />
          <h2>
            Name : {user.firstName} {user.lastName}
          </h2>
          <h3> Email : {user.email} </h3>
          <>
            {" "}
            {addedUser.map((item) => (
              <>
                <p> {item.fullName} </p>{" "}
              </>
            ))}{" "}
          </>
          <div>
            {" "}
            <button className="user_button" onClick={signOut}>
              Sign Out{" "}
            </button>{" "}
            <button
              onClick={() => setIsAddressModal(true)}
              className="user_button"
            >
              {" "}
              Address
            </button>{" "}
          </div>
        </div>
      )}
      {isAddressModal && (
        <div
          onClick={() => {
            setIsAddressModal(false);
          }}
          className="address_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="address_modal_outer_container"
          >
            <AddressForm />
          </div>
        </div>
      )}
      {auth.isLoggedIn && <InnerFooter />}
    </div>
  );
};
