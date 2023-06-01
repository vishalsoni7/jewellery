import React, { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const userToken = localStorage.getItem("token");

  const addToCart = async (product, userToken) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: { authorization: userToken },
        }
      );
      if (response.status === 201) {
        setCart(response.data.cart);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: userToken },
      });
      setCart(response.data.cart);
      console.log("cart", response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQnty = async (type, productId, userToken) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: { type: type },
        },
        {
          headers: { authorization: userToken },
        }
      );
      setCart(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };
  const values = { cart, addToCart, userToken, removeFromCart, handleQnty };
  return (
    <CartContext.Provider value={values}> {children} </CartContext.Provider>
  );
};
