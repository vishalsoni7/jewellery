import React from "react";
import axios from "axios";
import { createContext, useState } from "react";

import toast from "react-hot-toast";

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
        toast.success("Item added to Wishlist.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#252525",
            color: "whitesmoke",
          },
        });
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
      toast.error("Item removed!", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const inWishlist = (productId) => {
    return wishlist.find((item) => item.id === productId);
  };

  const values = {
    userToken,
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
