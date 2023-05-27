import React from "react";

import { NavLink } from "react-router-dom";

import "./signin.css";

export const SignIn = () => {
  return (
    <div>
      <div className="signin_mainDiv">
        {" "}
        <form class="signin-form">
          <p class="signin-form-title">Sign in to your account</p>
          <div class="signin-input-container">
            <input type="email" placeholder="Enter email" />
            <span></span>
          </div>
          <div class="signin-input-container">
            <input type="password" placeholder="Enter password" />
          </div>
          <button type="submit" class="signin-submit">
            SIGN IN
          </button>

          <p class="signin-signup-link">
            No account? <NavLink to="/signup">Sign up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
