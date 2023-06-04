import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const RequireAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return <>{auth.isLoggedIn ? children : <Navigate to="/signin" />}</>;
};

export default RequireAuth;
