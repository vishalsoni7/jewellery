import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./landing/Landing";

import { Product } from "./pages/product/Product";
import { WishList } from "./pages/wishlist/WishList";
import { Cart } from "./pages/cart/Cart";
import { CurrentProduct } from "./pages/currentProduct/CurrentProduct";
import { Header } from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Product />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<CurrentProduct />} />
      </Routes>
    </div>
  );
}

export default App;
