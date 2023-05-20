import React from "react";
import { Footer } from "../../component/Footer";

import "../product/product.css";

export const mails = [
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
  {
    id: 1,
    name: "Gold ring",
    by: "My Jwels",
    category: "Ring",
    price: "$ 9.99",
    weight: "500g",
    metal: "Gold",
    gst: 0.18,
    img: "./LR00055-6__1450266466.jpg",
  },
];

export const Product = () => {
  return (
    <div>
      {" "}
      <div className="product-maiDiv">
        {mails.map((item) => {
          const { name, price, img } = item;

          return (
            <div style={{ margin: "1rem" }} class="product-card">
              <div class="product-image">
                <img
                  src={img}
                  style={{
                    objectFit: "fill",
                    height: "245px",
                    width: "195px",
                  }}
                />{" "}
              </div>
              <span class="title">{name}</span>
              <span class="price"> {price} </span>
            </div>
          );
        })}
      </div>{" "}
      <Footer />
    </div>
  );
};

{
  /* <h2 className="heading"> All products</h2>
      <div className="product-cardLayout">
        {mails.map((item) => (
          <div className="product-card">
            <img className="product-img" src="./landing_image.jpeg" alt="img" />
            <h3>Product: {item.name} </h3>
            <p> By: {item.by} </p>
            <p> Price: {item.price} ₹</p>
            <button className="card-button"> Add to Cart </button>
          </div>
        ))}{" "}
      </div> */
}
