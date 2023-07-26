import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

import {
  AddtowishlistToast,
  RemoveWishlistToast,
  HandleError,
} from "../utils/Toast";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = async (product, userToken) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: { authorization: userToken },
        }
      );
      if (response.status === 201) {
        setWishlist(response.data.wishlist);
        AddtowishlistToast();
      }
    } catch (error) {
      console.error(error);
      HandleError();
    }
  };

  const removeFromWishlist = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: userToken },
      });
      setWishlist(response.data.wishlist);
      RemoveWishlistToast();
    } catch (error) {
      console.error(error);
      HandleError();
    }
  };

  const inWishlist = (productId) => {
    return wishlist.find((item) => item.id === productId);
  };

  const values = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    inWishlist,
  };

  return (
    <WishListContext.Provider value={values}>
      {" "}
      {children}{" "}
    </WishListContext.Provider>
  );
};
