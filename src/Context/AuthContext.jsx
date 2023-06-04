import React from "react";
import axios from "axios";

import toast from "react-hot-toast";

import { createContext, useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: false,
  });

  const userSignin = async (email, password) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status === 200) {
        authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
        localStorage.setItem("token", data.encodedToken);
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

  // const signOut = () => {
  //   authDispatch({ type: "HANDLE_LSIGN_IN", payload: false });
  //   localStorage.setItem("token", "");
  // };

  // const validiateToken = () => {
  //   const token = localStorage.getItem("token");
  // };

  return (
    <AuthContext.Provider value={{ auth, authDispatch, userSignin }}>
      {children}
    </AuthContext.Provider>
  );
};
