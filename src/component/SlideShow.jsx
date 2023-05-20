import React from "react";
import { Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/z/ZLR00323-6.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/b/BG00039-5.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/l/LR02646-6_513.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/g/GLR00250355__480344799.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/p/PFBR00008-6_534.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/t/TN00002-5.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/t/TN00009-5.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/v/VLBR00006-6_289.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/b/BR0078R-6_395.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/t/TN00080-5.jpg",
  },
  {
    url:
      "https://cf-cdn.pcjeweller.com/public/uploads/catalog/product/preview/m/MS00276-5_378.jpg",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "550px",
};

const slideDuration = 1500;

export const SlideShow = () => {
  return (
    <div className="slide-container" style={{ backgroundColor: "white" }}>
      <Fade duration={slideDuration}>
        {images.map((image, index) => (
          <div key={index}>
            {" "}
            <div
              style={{
                ...divStyle,
                objectFit: "cover",
                background: `url(${image.url}) no-repeat center`,
                backgroundSize: "35% auto",
              }}
            >
              {" "}
            </div>{" "}
          </div>
        ))}
      </Fade>
    </div>
  );
};
