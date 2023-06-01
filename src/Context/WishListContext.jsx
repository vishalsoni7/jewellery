import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

export const WishListContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const userToken = localStorage.getItem("token");

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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: userToken },
      });
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  const values = { userToken, wishlist, addToWishlist, removeFromWishlist };

  return (
    <WishListContext.Provider value={values}>
      {" "}
      {children}{" "}
    </WishListContext.Provider>
  );
};
