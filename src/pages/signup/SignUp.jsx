import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";

import "../signup/signup.css";
import { User } from "../user/Profile";

export const SignUp = () => {
  const {
    auth,
    // signOut,
    signUpUserDetail,
    setSignUpUserDetail,
    userSigUpHandle,
  } = useContext(AuthContext);

  return (
    <div className="sign_up_div">
      {auth.isLoggedIn ? (
        <User />
      ) : (
        <>
          {" "}
          <h1> Register </h1>
          <p>Signup now and get full access to our app. </p>
          <div className="sign_up_input_div1">
            {" "}
            <input
              onChange={(e) =>
                setSignUpUserDetail({
                  ...signUpUserDetail,
                  firstName: e.target.value,
                })
              }
              className="sign_up_div_input"
              required
              placeholder="Firstname"
              type="text"
            />
            <input
              onChange={(e) =>
                setSignUpUserDetail({
                  ...signUpUserDetail,
                  lastName: e.target.value,
                })
              }
              className="sign_up_div_input"
              required
              placeholder="Lastname"
              type="text"
            />{" "}
          </div>
          <div className="sign_up_input_div2">
            {" "}
            <input
              required
              onChange={(e) =>
                setSignUpUserDetail({
                  ...signUpUserDetail,
                  email: e.target.value,
                })
              }
              className="sign_up_input"
              placeholder="Email"
              type="email"
            />
            <input
              onChange={(e) =>
                setSignUpUserDetail({
                  ...signUpUserDetail,
                  password: e.target.value,
                })
              }
              className="sign_up_input"
              required
              placeholder="Password"
              type="password"
            />
            <input
              onChange={(e) =>
                setSignUpUserDetail({
                  ...signUpUserDetail,
                  confirmPassword: e.target.value,
                })
              }
              className="sign_up_input"
              required
              placeholder="Confirm password"
              type="password"
            />
            <button className="sign_up__div_btn" onClick={userSigUpHandle}>
              Submit
            </button>
            <p className="sign_in_no_AC">
              Already have an acount ? <NavLink to="/signin">Signin</NavLink>{" "}
            </p>
          </div>
        </>
      )}
      <InnerFooter />
    </div>
  );
};
