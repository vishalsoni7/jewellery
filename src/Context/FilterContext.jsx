// import React, { createContext, useReducer } from "react";
// import { DataReducer } from "../Reducer/CategoryReducer";

// export const FilterContext = createContext();

// const initial_State = {
//   category: [],
//   productData: [], // og Data
//   filterData: [], // copy data
//   serachedData: "",
//   sortRatings: 5,
//   clickedCategory: {
//     RINGS: false,
//     BRACELETS: false,
//     MANGALSUTRAS: false,
//   },
//   sortByPrice: "",
// };

// export const FiltersProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(DataReducer, initial_State);

//   const ckeckCategories = state.filterData.filter((product) => {
//     return (
//       (state.clickedCategory.RINGS && product.category === "Rings") ||
//       (state.clickedCategory.BRACELETS && product.category === "Bracelet") ||
//       (state.clickedCategory.MANGALSUTRAS && product.category === "Mangalsutra")
//     );
//   });

//   const values = { ckeckCategories, initial_State, state, dispatch };
//   console.log(ckeckCategories, state.filterData);
//   return (
//     <div>
//       <FilterContext.Provider value={values}>
//         {" "}
//         {children}{" "}
//       </FilterContext.Provider>
//     </div>
//   );
// };
