import React from "react";
import { NavLink } from "react-router-dom";

import "../signup/signup.css";

export const SignUp = () => {
  return (
    <div>
      <form class="form">
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <input required="" placeholder="" type="text" class="input" />
            <span>Firstname</span>
          </label>

          <label>
            <input required="" placeholder="" type="text" class="input" />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input required="" placeholder="" type="email" class="input" />
          <span>Email</span>
        </label>

        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Password</span>
        </label>
        <label>
          <input required="" placeholder="" type="password" class="input" />
          <span>Confirm password</span>
        </label>
        <button class="submit">Submit</button>
        <p class="signup">
          Already have an acount ? <NavLink to="/signin">Signin</NavLink>{" "}
        </p>
      </form>
    </div>
  );
};
