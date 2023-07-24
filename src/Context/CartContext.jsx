import React, { createContext, useState } from "react";
import axios from "axios";

import { AddtoCartToast, RemoveToast, HandleError } from "../utils/Toast";

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
        AddtoCartToast();
      }
    } catch (error) {
      console.error(error);
      HandleError();
    }
  };

  const removeFromCart = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: userToken },
      });
      setCart(response.data.cart);
      RemoveToast();
    } catch (error) {
      console.error(error);
      HandleError();
    }
  };

  const handleQnty = async (type, productId) => {
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
      HandleError();
    }
  };

  const inCart = (productId) => {
    return cart.find((item) => item.id === productId);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  const discount = totalPrice * (10 / 100);

  const discountedPrice = totalPrice - discount;

  const itemsInCart = cart.reduce((acc, curr) => {
    const currentValue = curr.name;
    if (!acc[currentValue]) {
      return { ...acc, [currentValue]: 1 * curr.qty };
    } else {
      return { ...acc, [currentValue]: acc[currentValue] + 1 * curr.qty };
    }
  }, {});

  const values = {
    cart,
    addToCart,
    removeFromCart,
    handleQnty,
    inCart,
    totalPrice,
    discount,
    discountedPrice,
    itemsInCart,
  };
  return (
    <>
      <CartContext.Provider value={values}> {children} </CartContext.Provider>{" "}
    </>
  );
};
