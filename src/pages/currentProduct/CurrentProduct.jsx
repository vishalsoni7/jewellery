import React, { useContext } from "react";

import "../currentProduct/currentProduct.css";

import { DataContext } from "../../Context/DataContext";

export const CurrentProduct = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      {" "}
      <div className="currentCart_main_div">
        <div className="current-product-card">
          <img src={data.img} alt="product" />

          <h2> {data.name} </h2>

          <ul className="currentProd_li">
            {" "}
            <li> M.R.P : {data.price}</li>
            <li> Weight : {data.weight} </li>
            <li> Metal : {data.metal} </li>
            <li>GST : {data.GST} </li>
            <li> Size : {data.size} </li>
            <li> Ratings : {data.rating} </li>
          </ul>

          <button className="current-button">Add to Cart</button>
          <button className="current-button"> Add to Wishlist </button>
        </div>
      </div>{" "}
    </div>
  );
};

// style={{
//   marginTop: "5rem",
//   display: "flex",
//   alignContent: "center",
//   justifyContent: "space-around",
// }}
