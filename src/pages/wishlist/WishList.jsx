import React, { useContext } from "react";
import { WishListContext } from "../../Context/WishListContext";

import "../wishlist/wishlist.css";

export const WishList = () => {
  const { wishlist } = useContext(WishListContext);
  return (
    <div>
      <div className="wishlist-mainDiv">
        <h2>
          {" "}
          My wish list <sup> {`(${wishlist.length})`} </sup>{" "}
        </h2>
        {wishlist.map((item) => {
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
