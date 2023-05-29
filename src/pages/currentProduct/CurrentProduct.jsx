import React, { useContext } from "react";

import "../currentProduct/currentProduct.css";

import { DataContext } from "../../Context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

export const CurrentProduct = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <div className="current-mainDiv">
        <div className="current-card">
          <div className="img-container">
            <img className="current-img" src={data.img} alt="product" />
          </div>
          <div className="current-content">
            <h1> {data.name} </h1>
            <div className="current-offer">
              {data.certification ? (
                <p>
                  <FontAwesomeIcon icon={faCertificate} size="2xs" />{" "}
                  {data.certification}
                </p>
              ) : null}
              <p>
                {" "}
                <FontAwesomeIcon icon={faCheck} size="2xs" /> {data.mark}
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faTruckFast} size="2xs" />{" "}
                {data.shipping}
              </p>
            </div>
            <p className="current-card-p">By : {data.by} </p>
            <p> Weight : {data.weight} </p>
            <p> Metal : {data.metal} </p>
            <p>GST : {data.GST} </p>
            <p> Size : {data.size} </p>
            <p> Rating : {data.rating} </p>
            <h2> M.R.P : {data.price} ₹</h2>
            <button className="current-addtocart-btn">Add to Cart</button>
            <br />
            <button className="current-wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
