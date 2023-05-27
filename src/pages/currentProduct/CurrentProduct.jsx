import React, { useContext } from "react";

import "../currentProduct/currentProduct.css";

import { DataContext } from "../../Context/DataContext";

export const CurrentProduct = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      {" "}
      <div className="current-mainDiv">
        <div className="current-card">
          <img className="current-img" src={data.img} alt="product" />

          <div className="current-content">
            {" "}
            <h1> {data.name} </h1>
            <p className="current-card-p">By : {data.by} </p>
            <p> Weight : {data.weight} </p>
            <p> Metal : {data.metal} </p>
            <p>GST : {data.GST} </p>
            <p> Size : {data.size} </p>
            <p> Rating : {data.rating} </p>
            <h2> M.R.P : {data.price} ₹</h2>
            <div className="current-btn-div">
              {" "}
              <button className="current-addtocart-btn">Add to Cart</button>
              <button className="current-wishlist-btn">
                {" "}
                Add to Wishlist{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
