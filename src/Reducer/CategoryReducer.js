export const initial_State = {
  category: [],
  productData: [],
  filterData: [],
  sortRatings: "",
  clickedCategory: "",
  ringCategory: false,
  braceletCategory: false,
  mangalsutraCategory: false,
  maxRating: 0,
  rating: 0,
  minRating: 1,
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      let filterRatings = action.payload.map((item) => item.rating);
      return {
        ...state,
        productData: action.payload,
        filterData: action.payload,
        maxRating: Math.max(...filterRatings),
      };
    }
    case "ALL_CATEGORIES": {
      return {
        ...state,
        category: action.payload,
      };
    }
    case "SEARCHEDDATA": {
      return {
        ...state,
        filterData: state.productData.filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    }
    case "SORTBYPRICE": {
      return {
        ...state,
        filterData: [...state.filterData].sort((a, b) =>
          action.payload === "lowToHigh" ? a.price - b.price : b.price - a.price
        ),
      };
    }
    case "FILTER_CATEGORY": {
      return {
        ...state,
        clickedCategory: action.payload,
        filterData: [...state.productData].filter(
          ({ category }) => category === state.clickedCategory
        ),
      };
    }
    case "CLEAR": {
      return {
        ...state,
        filterData: state.productData,
      };
    }
    case "FILTER_BY_RATING": {
      return {
        ...state,
        rating: action.payload,
        filterData: [...state.productData].filter(
          ({ rating }) => rating === action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
