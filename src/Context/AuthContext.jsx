import React from "react";
import axios from "axios";

import { createContext, useReducer } from "react";
import { AuthReducer } from "../Reducer/AuthReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(AuthReducer, {
    isLoggedin: false,
    user: {},
  });

  const userSignin = async (email, password, navigate) => {
    try {
      const { status, data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (status === 200) {
        localStorage.setItem("token", data.encodedToken);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, authDispatch, userSignin }}>
      {children}
    </AuthContext.Provider>
  );
};
