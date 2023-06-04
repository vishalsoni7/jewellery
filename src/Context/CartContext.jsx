import React, { createContext, useState } from "react";
import axios from "axios";

import toast, { Toaster } from "react-hot-toast";

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
        toast.success("Item added to cart.", {
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

  const removeFromCart = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: userToken },
      });
      setCart(response.data.cart);
      toast.error("Item removed!", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
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

  const inCart = (productId) => {
    return cart.find((item) => item.id === productId);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  const discount = totalPrice * (10 / 100);

  const discountedPrice = totalPrice - discount;

  const itemsInCart = cart.reduce((acc, curr) => {
    const currentValue = curr.name;
    if (!acc[currentValue]) {
      return { ...acc, [currentValue]: 1 };
    } else {
      return { ...acc, [currentValue]: acc[currentValue] + 1 };
    }
  }, {});

  const values = {
    cart,
    addToCart,
    userToken,
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
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
