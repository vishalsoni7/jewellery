import React, { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import "./signin.css";

export const SignIn = () => {
  const { userSignin, isLoggedin } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  return (
    <div>
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
        <input
          className="sign_in_input"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          type="password"
          placeholder="Enter password"
        />
        <button
          className="sign_in_btn"
          onClick={() =>
            userSignin(userDetails.email, userDetails.password, navigate)
          }
          type="submit"
        >
          {isLoggedin ? "Sign Out" : "Sign In"}
        </button>
        <button
          className="sign_in_as_guest_btn"
          onClick={() =>
            userSignin("vishalsoni@gmail.com", "vishal1234", navigate)
          }
        >
          Sign In as Guest{" "}
        </button>
        <p className="sign_up_no_AC">
          No account? <NavLink to="/signup">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};
