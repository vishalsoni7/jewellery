export const AuthReducer = (authState, action) => {
  switch (action.type) {
    case "GET_TOKEN": {
      return {
        ...authState,
        token: action.payload,
        isLoggedIn: action.payload,
      };
    }
    default: {
      return authState;
    }
  }
};
