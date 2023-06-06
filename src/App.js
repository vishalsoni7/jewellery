import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Landing } from "./landing/Landing";
import Mockman from "mockman-js";

import { Nevigation } from "./component/Nevigation";
import { Product } from "./pages/product/Product";
import { WishList } from "./pages/wishlist/WishList";
import { Cart } from "./pages/cart/Cart";
import { CurrentProduct } from "./pages/currentProduct/CurrentProduct";
import { SignIn } from "./pages/signin/SignIn";
import { SignUp } from "./pages/signup/SignUp";
import { Error } from "./pages/Error/Error";
import { CheckOut } from "./pages/ckeckout/Checkout";
import { AddressForm } from "./utils/AddressForm";
import RequireAuth from "./utils/RequireAuth";
import { User } from "./pages/user/Profile";

function App() {
  return (
    <div className="App">
      <Nevigation />

      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:productId" element={<CurrentProduct />} />

        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route path="/user" element={<User />} />
        {/* <Route path="/address" element={<AddressForm />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
