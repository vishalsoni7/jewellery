import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { createContext, useReducer } from "react";

import { DataReducer, initial_State } from "../Reducer/CategoryReducer";

export const DataContext = createContext();

export const Categories = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initial_State);
  const [isCategory, setIsCategory] = useState([]);
  const [isProduct, setIsProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/categories");
        const { categories } = await response.json();
        setIsCategory(categories);

        const dataResponse = await fetch("/api/products");
        const { products } = await dataResponse.json();
        setIsProduct(products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const values = { state, dispatch, isCategory, isProduct };
  return (
    <DataContext.Provider value={values}> {children} </DataContext.Provider>
  );
};
