import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { User } from "../user/Profile";

import "./signin.css";

export const SignIn = () => {
  const {
    auth,
    guestSignin,
    userDetails,
    setUserDetails,
    handleLogInFormSubmit,
    isPswrd,
    pswrdVisible,
  } = useContext(AuthContext);

  return (
    <div>
      {auth.isLoggedIn ? (
        <div>
          <User />
        </div>
      ) : (
        <div className="sign_in_div">
          <p className="sign_in_heading">Sign in </p>{" "}
          <input
            className="sign_in_input"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
          />
          <div className="password-container">
            {" "}
            <input
              className="sign_in_input passwordInput"
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              type={isPswrd ? "text" : "password"}
              placeholder="Enter password"
            />
            <span
              className="passwordToggle"
              type="button"
              onClick={pswrdVisible}
            >
              {isPswrd ? "Hide" : "Show"}
            </span>{" "}
          </div>
          <button className="sign_in_btn" onClick={handleLogInFormSubmit}>
            Sign In
          </button>
          <p className="sign_up_no_AC">
            No account? <NavLink to="/signup">Sign up</NavLink>
          </p>
          <p
            className="guest"
            onClick={() => guestSignin("vishalsoni@gmail.com", "vishal1234")}
          >
            Sign In as <span className="guest_color"> Guest </span> ?
          </p>
        </div>
      )}

      {!auth.isLoggedIn && <InnerFooter />}
    </div>
  );
};
