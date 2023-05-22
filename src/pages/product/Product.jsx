import "../product/product.css";

import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { Filters } from "./FiterSection";
import { Link } from "react-router-dom";

export const Product = () => {
  const { isProduct } = useContext(DataContext);
  return (
    <div>
      <Filters />

      <div className="product-maiDiv">
        {isProduct.map((item) => {
          const { name, price, img, id } = item;

          return (
            <div key={id} class="product-card">
              <div class="product-image">
                <Link to={`/product/${id}`}>
                  {" "}
                  <img src={img} alt="product" />
                </Link>
              </div>

              <span class="title">{name}</span>
              <span class="price"> {price} </span>
              <div>
                {" "}
                <button className="prod-button"> Add to cart </button>{" "}
                <button className="prod-button"> Add to Wishlist </button>{" "}
              </div>
            </div>
          );
        })}
      </div>
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
        ))}
      </div>

// fetchdata from
// fetch /api/products

{
  /* <div>
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
</div> */
}
