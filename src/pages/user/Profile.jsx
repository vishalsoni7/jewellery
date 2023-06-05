import React, { useContext } from "react";

import "../user/user.css";

import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { SignIn } from "../signin/SignIn";

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
          <img src="../user2.png" className="user_img" />
          <h2 style={{ textAlign: "left" }}>
            Name : {user.firstName} {user.lastName}
          </h2>
          <h3> Email : {user.email} </h3>
          <h3> {user.firstName} </h3>
          <button className="user_button" onClick={signOut}>
            Sign Out{" "}
          </button>{" "}
        </div>
      )}

      <InnerFooter />
    </div>
  );
};
