import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { InnerFooter } from "../../component/InnerFooter";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import { WishListContext } from "../../Context/WishListContext";

import "../wishlist/wishlist.css";

export const WishList = () => {
  const { userToken } = useContext(AuthContext);
  const { wishlist, removeFromWishlist } = useContext(WishListContext);
  const { addToCart, handleQnty, inCart } = useContext(CartContext);

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
                    {!inCart(_id) ? (
                      <button
                        onClick={() => {
                          addToCart(item, userToken);
                          removeFromWishlist(_id, userToken);
                        }}
                        className="wishlist-btn"
                      >
                        {" "}
                        Move to Cart{" "}
                      </button>
                    ) : (
                      <button
                        className="wishlist-btn"
                        onClick={() => {
                          handleQnty("increment", _id, userToken);
                          toast.success("Item added to cart.", {
                            style: {
                              fontSize: "large",
                              padding: ".5rem",
                              background: "#252525",
                              color: "whitesmoke",
                            },
                          });
                        }}
                      >
                        {" "}
                        <NavLink className="wishlist_link" to="/cart">
                          {" "}
                          Add more in Cart{" "}
                        </NavLink>
                      </button>
                    )}

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
