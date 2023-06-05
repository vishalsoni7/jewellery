import React from "react";
import axios from "axios";

import toast from "react-hot-toast";

import { createContext, useReducer, useState } from "react";
import { AuthReducer } from "../Reducer/AuthReducer";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: false,
  });

  const navigate = useNavigate();

  const [signUpUserDetail, setSignUpUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || ""
  );
  //name to be correct
  const userSigUpHandle = async () => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", signUpUserDetail);
      localStorage.setItem("signUpUserDetails", JSON.stringify(createdUser));
      localStorage.setItem("token", JSON.stringify(encodedToken));
      toast.success("Signed in successfully.", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
      setUserToken(encodedToken);
      authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  const guestSignin = async (email, password) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (status === 200) {
        authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
        localStorage.setItem(
          "signUpUserDetails",
          JSON.stringify(data.foundUser)
        );
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        toast.success("Signed in successfully.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#252525",
            color: "whitesmoke",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userSignIn = async () => {
    try {
      const { status, data } = await axios.post("/api/auth/login", userDetails);
      if (status === 200) {
        authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
        localStorage.setItem(
          "signUpUserDetails",
          JSON.stringify(data.foundUser)
        );
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        toast.success("Signed in successfully.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#252525",
            color: "whitesmoke",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    authDispatch({ type: "HANDLE_SIGN_OUT", payload: false });
    localStorage.removeItem("token");
    localStorage.removeItem("signUpUserDetails", signUpUserDetail);
    toast.error("You have sign Out.", {
      style: {
        fontSize: "large",
        padding: ".5rem",
        background: "#252525",
        color: "whitesmoke",
      },
    });
    navigate("/");
  };

  const values = {
    auth,
    authDispatch,
    guestSignin,
    signOut,
    signUpUserDetail,
    setSignUpUserDetail,
    userSigUpHandle,
    userDetails,
    setUserDetails,
    userSignIn,
    userToken,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
