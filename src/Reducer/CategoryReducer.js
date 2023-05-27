export const initial_State = {
  category: [],
  productData: [], // og Data
  filterData: [], // copy data
  serachedData: "",
  sortRatings: 5,
  clickedCategory: "",
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
        filterData: state.productData.filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
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
    case "FILTER_CATEGORY": {
      return {
        ...state,
        clickedCategory: action.payload,
        filterData: [...state.filterData].filter(
          ({ category }) => category === action.payload
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

    case "CLEAR": {
      return {
        ...state,
        filterData: state.productData,
        serachedData: state.productData,
        sortRatings: 3,
        clickedCategory: state.productData,
        sortByPrice: state.productData,
      };
    }
    default: {
      return state;
    }
  }
};
