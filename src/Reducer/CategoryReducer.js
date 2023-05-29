export const initial_State = {
  category: [],
  productData: [], // OG Data
  filterData: [], // copy data
  serachedData: "",
  sortRatings: 5,
  clickedCategory: {
    RINGS: false,
    BRACELETS: false,
    MANGALSUTRAS: false,
  },
  sortByPrice: "",
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      return {
        ...state,
        productData: action.payload,
        filterData: action.payload,
      };
    }
    case "ALL_CATEGORIES": {
      return {
        ...state,
        category: action.payload,
      };
    }
    case "SEARCHED_DATA": {
      return {
        ...state,
        serachedData: action.payload,
        filterData: [...state.productData].filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    }
    case "FILTER_BY_RATING": {
      return {
        ...state,
        sortRatings: action.payload,
        filterData: [...state.productData].filter(
          ({ rating }) => rating <= action.payload
        ),
      };
    }
    case "FILTER_RINGS": {
      return {
        ...state,
        clickedCategory: action.payload,
        filterData: [...state.productData].filter(({ category }) => category),
      };
    }
    case "FILTER_BRACELETS": {
      return {
        ...state,
        clickedCategory: action.payload,
        filterData: [...state.productData].filter(({ category }) => category),
      };
    }
    case "FILTER_MANGALSUTRAS": {
      return {
        ...state,
        clickedCategory: action.payload,
        filterData: [...state.productData].filter(({ category }) => category),
      };
    }
    case "SORT_BY_PRICE": {
      return {
        ...state,
        sortByPrice: action.payload,
        filterData: [...state.filterData].sort((a, b) =>
          action.payload === "lowToHigh" ? a.price - b.price : b.price - a.price
        ),
      };
    }
    case "CLEAR": {
      return {
        ...state,
        filterData: state.productData,
        serachedData: "",
        sortRatings: 3,
        clickedCategory: "",
        sortByPrice: "",
      };
    }
    default: {
      return state;
    }
  }
};
