import React from "react";

export const mails = [
  {
    mId: "guid-1",

    subject: "Training Program",
    content:
      "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
  },
];

export const WishList = () => {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <h1> My wish list </h1>
      <div className="card">
        {" "}
        {mails.map((item) => (
          <>
            <img src="./logo192.jpeg" alt="img" />

            <h1> {item.subject} </h1>
            <p> {item.content} </p>
          </>
        ))}{" "}
      </div>
    </div>
  );
};
