import React from "react";
import "../wishlist/wishlist.css";

export const mails = [
  {
    _id: 1,
    name: "The Naveah Diamond Ring",
    img:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/l/LR00055-6__1450266466.jpg",
    by: "Jwels",
    category: "Ring",
    price: 10246,
    weight: "0.84 g",
    metal: "Yellow Gold",
    GST: "3 %",
    size: 7,
    rating: 5,
  },
];

export const WishList = () => {
  return (
    <div>
      <div className="wishlist-mainDiv">
        <h2>
          {" "}
          My wish list <sup> {`(${mails.length})`} </sup>{" "}
        </h2>
        {mails.map((item) => {
          const { _id, name, img, by, price, weight, rating } = item;
          return (
            <div key={_id} className="wishlist-card">
              <img className="wishlist-img" src={img} alt="products" />

              <div>
                <h2> {name} </h2>
                <p className="wishlist-p"> By: {by} </p>
                <p> Rating : {rating} </p>
                <p> Price: {price} ₹</p>
                <p> Weight: {weight} </p>
                <button className="wishlist-btn"> Move to Cart </button>
                <button className="remove-wishlist-btn">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
