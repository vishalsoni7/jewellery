export const AuthReducer = (authState, action) => {
  switch (action.type) {
    case "HANDLE_SIGN_IN": {
      return {
        ...authState,
        isLoggedIn: action.payload,
      };
    }
    case "HANDLE_SIGN_OUT": {
      return {
        ...authState,
        isLoggedIn: action.payload,
      };
    }
    default: {
      return authState;
    }
  }
};
