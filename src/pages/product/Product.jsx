import React from "react";

import "../product/product.css";

export const mails = [
  {
    mId: "guid-1",
    subject: "Training Program",
    content: "About Microsoft Virtual Academy<br/>Microsoft Virtua",
  },
  {
    mId: "guid-2",

    subject: "Empower your future",
    content: "We foster our pipeline of future leaders with 47",
  },
  {
    mId: "guid-3",
    unread: true,
    isStarred: true,
    subject: "Pre Approved Loan",
    content:
      "Congratulations ! <u>Credit card<u> is being shipped to you today!",
  },
  {
    mId: "guid-3",
    unread: true,
    isStarred: true,
    subject: "Pre Approved Loan",
    content:
      "Congratulations ! <u>Credit card<u> is being shipped to you today!",
  },
  {
    mId: "guid-3",
    unread: true,
    isStarred: true,
    subject: "Pre Approved Loan",
    content:
      "Congratulations ! <u>Credit card<u> is being shipped to you today!",
  },
];

export const Product = () => {
  return (
    <div>
      <h1> Products </h1>
      <aside
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="cardLayout">
          {mails.map((item) => (
            <div className="card">
              <img src="./logo192.jpeg" alt="img" />
              <h4>{item.subject}</h4>
              <p>{item.content}</p>
              <button className="card-button"> order now </button>
            </div>
          ))}{" "}
        </div>
      </aside>
    </div>
  );
};
