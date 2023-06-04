import React, { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";

import "./signin.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const { auth, userSignin } = useContext(AuthContext);
  if (auth.isLoggedIn) {
    navigate("/");
  }

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <div className="sign_in_div">
        <p className="sign_in_heading">Sign in </p>{" "}
        <input
          required
          className="sign_in_input"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          type="email"
          placeholder="Enter email"
        />
        <input
          required
          className="sign_in_input"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          type="password"
          placeholder="Enter password"
        />
        <button
          className="sign_in_btn"
          onClick={() => userSignin(userDetails.email, userDetails.password)}
          type="submit"
        >
          Sign In
        </button>
        <p className="sign_up_no_AC">
          No account? <NavLink to="/signup">Sign up</NavLink>
        </p>
        <p
          className="guest"
          onClick={() => userSignin("vishalsoni@gmail.com", "vishal1234")}
        >
          Sign In as <span className="guest_color"> Guest </span> ?
        </p>
      </div>

      <InnerFooter />
    </div>
  );
};
