import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Nevigation />

      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product" element={<CurrentProduct />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
