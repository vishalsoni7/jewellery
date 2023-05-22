export const initial_State = {
  category: {},
  prods: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORIES": {
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
