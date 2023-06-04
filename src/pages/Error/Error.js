import React from "react";
import { NavLink } from "react-router-dom";
import { InnerFooter } from "../../component/InnerFooter";

import "../Error/error.css";

export const Error = () => {
  return (
    <div className="error">
      <h1 className="error-h1">
        {" "}
        404 - Nothing to see here, <br />
        or page not found!
      </h1>

      <h2>
        {" "}
        You can browse{" "}
        <NavLink className="error_link" to="/products">
          Jwels
        </NavLink>{" "}
        to see all products.
      </h2>
      <InnerFooter />
    </div>
  );
};
