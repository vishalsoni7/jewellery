import React from "react";

import { Link } from "react-router-dom";

import "../landing/landing.css";

import img1 from "../landing/img/mangalsutra.jpeg";

export const Landing = () => {
  return (
    <div>
      <div>
        <img className="img" src={img1} alt="landing img" />
      </div>
      <div>
        <p> Ring </p>
        <p>
          Exquisite and versatile, our collection of rings features captivating
          designs crafted from premium materials, adding a touch of elegance and
          individuality to any occasion.{" "}
        </p>
      </div>
      <div>
        <p>Mangalsutra</p>
        <p>
          Exquisitely crafted with intricate detailing and precious materials,
          our mangalsutras are designed to honor the sacred bond of marriage,
          offering timeless beauty and elegance to adorn the neckline of the
          bride.
        </p>
      </div>
      <div className="circle">
        <p> Bracelet </p>
        <p>
          Elevate your style with our enchanting bracelet collection, featuring
          a diverse range of designs meticulously crafted to accentuate your
          wrist.
        </p>
      </div>

      <footer class="footer">
        <div class="grid-container">
          <h2>My Jwels</h2>
          <h3>Bring some happiness in your house with values.</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms of Use</h3>
          <h3>© 2023 My Jwels</h3>
          <h3>About</h3>
          <h4>Github</h4>
          <h4>Twitter</h4>
          <h4>LinkedIn</h4>
          <h4>Instagram</h4>
        </div>
      </footer>
    </div>
  );
};
