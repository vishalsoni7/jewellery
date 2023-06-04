import React from "react";

import "../component/innerfooter.css";

export const InnerFooter = () => {
  return (
    <div className="inner_footer_parent_div">
      <div className="inner_footer_div">
        <a
          href="https://github.com/vishalsoni7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github font_awsome_logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/vishal-soni-b21a4a1b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin font_awsome_logo" />
        </a>
        <a
          href="https://www.instagram.com/vishaallsoni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram font_awsome_logo" />
        </a>
        <a
          href="https://twitter.com/Vishsoni7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter font_awsome_logo" />
        </a>
      </div>

      <div className="inner_footer_text">
        <h3>
          Please be kind to Animals.
          <span className="inner_footer_emojies" role="img" aria-label="paw">
            🐾
          </span>
        </h3>
        <h4>
          Made by Vishal Soni.{" "}
          <span className="inner_footer_emojies" role="img" aria-label="love">
            ♥️
          </span>
        </h4>
      </div>
    </div>
  );
};
