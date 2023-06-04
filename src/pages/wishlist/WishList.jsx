import React, { useContext } from "react";
import { InnerFooter } from "../../component/InnerFooter";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

import "../wishlist/wishlist.css";

export const WishList = () => {
  const { wishlist, removeFromWishlist, userToken } = useContext(
    WishListContext
  );

  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="wishlist-mainDiv">
        {wishlist.length ? (
          <>
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
                    <button
                      onClick={() => addToCart(item, userToken)}
                      className="wishlist-btn"
                    >
                      {" "}
                      Move to Cart{" "}
                    </button>
                    <button
                      onClick={() => removeFromWishlist(_id, userToken)}
                      className="remove-wishlist-btn"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}{" "}
          </>
        ) : (
          <h2 className="empty">
            Your Wishlist Is Empty !
            <span role="img" aria-label="sad">
              ☹️
            </span>
          </h2>
        )}
      </div>
      <InnerFooter />
    </div>
  );
};
