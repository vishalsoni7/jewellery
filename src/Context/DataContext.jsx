import React from "react";

import { createContext, useReducer, useState, useEffect } from "react";
import { DataReducer, initial_State } from "../Reducer/CategoryReducer";
export const DataContext = createContext();

export const Categories = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initial_State);
  const [data, setData] = useState({});

  const singleProduct = async (productId) => {
    try {
      const res = await fetch(`/api/products/${productId}`);
      const { product } = await res.json();
      setData(product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/categories");
        const { categories } = await response.json();
        dispatch({ type: "ALL_CATEGORIES", payload: categories });

        const dataResponse = await fetch("/api/products");
        const { products } = await dataResponse.json();
        dispatch({ type: "ALL_PRODUCTS", payload: products });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const values = {
    state,
    dispatch,
    singleProduct,
    data,
  };
  return (
    <DataContext.Provider value={values}> {children} </DataContext.Provider>
  );
};
