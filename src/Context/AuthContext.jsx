import React from "react";
import axios from "axios";

import {
  SignInUser,
  SignOutToast,
  handleLogInFormSubmitToast,
  handleCreateAccountToast,
  handleCreateAccountToastError,
  HandleError,
} from "../utils/Toast";

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

  const [isPswrd, setIsPswrd] = useState(false);

  const pswrdVisible = () => {
    setIsPswrd(!isPswrd);
  };

  const userSigUpHandle = async () => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", signUpUserDetail);
      localStorage.setItem("signUpUserDetails", JSON.stringify(createdUser));
      localStorage.setItem("token", JSON.stringify(encodedToken));
      SignInUser(createdUser);
      authDispatch({ type: "HANDLE_SIGN_IN", payload: true });
      navigate("/products");
    } catch (error) {
      console.error(error);
      HandleError();
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
        SignInUser(data.foundUser);
      }
    } catch (error) {
      console.log(error);
      HandleError();
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
        SignInUser(data.foundUser);
      }
    } catch (error) {
      console.log(error);
      HandleError();
    }
  };

  const signOut = () => {
    authDispatch({ type: "HANDLE_SIGN_OUT", payload: false });
    localStorage.removeItem("token");
    localStorage.removeItem("signUpUserDetails", signUpUserDetail);
    SignOutToast();
    navigate("/");
  };

  const handleLogInFormSubmit = (e) => {
    e.preventDefault();
    if (userDetails.email.trim() === "" || userDetails.password.trim() === "") {
      handleLogInFormSubmitToast();
    } else {
      userSignIn(e);
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (
      signUpUserDetail.firstName.trim() === "" ||
      signUpUserDetail.lastName.trim() === "" ||
      signUpUserDetail.email.trim() === "" ||
      signUpUserDetail.password.trim() === "" ||
      signUpUserDetail.confirmPassword.trim() === ""
    ) {
      handleCreateAccountToast();
    } else if (signUpUserDetail.password !== signUpUserDetail.confirmPassword) {
      handleCreateAccountToastError();
    } else {
      userSigUpHandle(e);
    }
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
    handleLogInFormSubmit,
    handleCreateAccount,
    isPswrd,
    pswrdVisible,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
