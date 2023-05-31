import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return auth.isLoggedin ? children : <Navigate to="/signin" />;
};
