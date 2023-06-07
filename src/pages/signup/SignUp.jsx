import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import "../signup/signup.css";
import { User } from "../user/Profile";

export const SignUp = () => {
  const {
    auth,
    signUpUserDetail,
    setSignUpUserDetail,
    handleCreateAccount,
    isPswrd,
    pswrdVisible,
  } = useContext(AuthContext);

  return (
    <div>
      {" "}
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
                placeholder="Lastname"
                type="text"
              />{" "}
            </div>
            <div className="sign_up_input_div2">
              {" "}
              <input
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
              <>
                {" "}
                <input
                  onChange={(e) =>
                    setSignUpUserDetail({
                      ...signUpUserDetail,
                      password: e.target.value,
                    })
                  }
                  className="sign_up_input"
                  placeholder="Password"
                  type="password"
                />{" "}
                <span
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "46.5%",
                    marginLeft: "20rem",
                  }}
                  type="button"
                  onClick={pswrdVisible}
                >
                  {isPswrd ? "Hide" : "Show"}
                </span>{" "}
              </>
              <input
                onChange={(e) =>
                  setSignUpUserDetail({
                    ...signUpUserDetail,
                    confirmPassword: e.target.value,
                  })
                }
                className="sign_up_input"
                placeholder="Confirm password"
                type="password"
              />
              <button
                onClick={handleCreateAccount}
                className="sign_up__div_btn"
              >
                Submit
              </button>
              <p className="sign_in_no_AC">
                Already have an acount ? <NavLink to="/signin">Signin</NavLink>{" "}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
