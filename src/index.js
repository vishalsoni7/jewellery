import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Categories } from "./Context/DataContext";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishListContext";
import { AddressProvider } from "./Context/AddressContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Categories>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </Categories>
    </BrowserRouter>
  </React.StrictMode>
);
