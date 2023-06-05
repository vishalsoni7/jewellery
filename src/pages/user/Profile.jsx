import React, { useContext } from "react";

import "../user/user.css";

import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { SignIn } from "../signin/SignIn";
import { NavLink } from "react-router-dom";

export const User = () => {
  const { signOut, auth } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem("signUpUserDetails"));

  return (
    <div>
      {!auth.isLoggedIn ? (
        <SignIn />
      ) : (
        <div className="user_div">
          {" "}
          <img src="../user2.png" alt="profile" className="user_img" />
          <h2 style={{ textAlign: "left" }}>
            Name : {user.firstName} {user.lastName}
          </h2>
          <h3> Email : {user.email} </h3>
          <div>
            {" "}
            <button className="user_button" onClick={signOut}>
              Sign Out{" "}
            </button>{" "}
            <button className="user_button">
              {" "}
              <NavLink className="user_link" to="/address">
                {" "}
                Address{" "}
              </NavLink>{" "}
            </button>{" "}
          </div>
        </div>
      )}
      <InnerFooter />
    </div>
  );
};
