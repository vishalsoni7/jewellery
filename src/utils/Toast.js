import toast from "react-hot-toast";

export const SignInUser = (foundUser) =>
  toast.success(`Welcome ${foundUser.firstName}`, {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const SignOutToast = () =>
  toast.error("Signed Out", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const handleLogInFormSubmitToast = () => {
  toast.error("Please Sign In", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const handleCreateAccountToast = () => {
  toast.error("Please Sign Up", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const handleCreateAccountToastError = () => {
  toast.error("Password does not matched.", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const AddtoCartToast = () => {
  toast.success("Item added to cart.", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const RemoveToast = () => {
  toast.error("Item removed from cart!", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const AddtowishlistToast = () => {
  toast.success("Item added to wishlist.", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const RemoveWishlistToast = () => {
  toast.error("Item removed from wishlist!", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};

export const HandleError = () => {
  toast.error("Something went wrong!", {
    style: {
      fontSize: "large",
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
};
