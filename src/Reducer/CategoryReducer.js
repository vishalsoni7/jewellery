export const initial_State = {
  category: [],
  productData: [],
  filterData: [],
  searchedData: "",
  sortRatings: 5,
  sortByPrice: "",
  selectedCategories: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS_DATA": {
      return {
        ...state,
        filterData: action.payload,
        productData: action.payload,
      };
    }
    case "SET_FILTERED_DATA": {
      return {
        ...state,
        filterData: action.payload,
      };
    }
    case "SEARCHED_DATA": {
      return {
        ...state,
        searchedData: action.payload,
      };
    }
    case "ALL_CATEGORIES": {
      return {
        ...state,
        category: action.payload,
      };
    }

    case "FILTER_BY_RATING": {
      return {
        ...state,
        sortRatings: action.payload,
      };
    }
    case "SORT_BY_PRICE": {
      return {
        ...state,
        sortByPrice: action.payload,
      };
    }
    case "TOGGLE_SELECTED_CATEGORY": {
      if (state.selectedCategories.includes(action.payload)) {
        return {
          ...state,
          selectedCategories: state.selectedCategories.filter(
            (item) => item !== action.payload
          ),
        };
      }
      return {
        ...state,

        selectedCategories: [...state.selectedCategories, action.payload],
      };
    }
    case "CLEAR": {
      return {
        ...state,
        filterData: state.productData,
        searchedData: "",
        sortRatings: 5,
        selectedCategories: [],
        sortByPrice: "",
      };
    }
    default: {
      return state;
    }
  }
};
