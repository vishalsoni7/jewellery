import React from "react";
import { useContext } from "react";

import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";

export const CurrentProduct = () => {
  const { isProduct } = useContext(DataContext);

  const { productId } = useParams();

  const findProduct = isProduct.find(({ id }) => id === productId);
  console.log(findProduct);
  return (
    <div style={{ marginTop: "5rem" }}>
      <div style={{ border: "2px solid red" }} className="current-product-card">
        <div>
          <img src={findProduct.img} alt="product" />
        </div>

        <div>
          <h2> {findProduct.name} </h2>

          <span>M.R.P : {findProduct.price} </span>
          <span>Weight : {findProduct.weight} </span>
          <span>Metal : {findProduct.metal} </span>
          <span>GST : {findProduct.GST} </span>
          <span>Size : {findProduct.size} </span>
          <span>Ratings : {findProduct.rating} </span>
        </div>

        <div>
          <button>Add to Cart</button>
          <button> Add to Wishlist </button>
        </div>
      </div>
    </div>
  );
};
