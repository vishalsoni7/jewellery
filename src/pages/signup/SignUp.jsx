import React from "react";
import { NavLink } from "react-router-dom";

import "../signup/signup.css";

export const SignUp = () => {
  return (
    <div className="sign_up_div">
      <h1> Register </h1>
      <p>Signup now and get full access to our app. </p>

      <div className="sign_up_input_div1">
        {" "}
        <input
          className="sign_up_div_input"
          required
          placeholder="Firstname"
          type="text"
        />
        <input
          className="sign_up_div_input"
          required
          placeholder="Lastname"
          type="text"
        />{" "}
      </div>

      <div className="sign_up_input_div2">
        {" "}
        <input
          className="sign_up_input"
          required
          placeholder="Email"
          type="email"
        />
        <input
          className="sign_up_input"
          required
          placeholder="Password"
          type="password"
        />
        <input
          className="sign_up_input"
          required
          placeholder="Confirm password"
          type="password"
        />
        <button className="sign_up__div_btn">Submit</button>
        <p className="sign_in_no_AC">
          Already have an acount ? <NavLink to="/signin">Signin</NavLink>{" "}
        </p>
      </div>
    </div>
  );
};
