import React from "react";
import { NavLink } from "react-router-dom";

import "../component/footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <li>Jwels</li>
          <li>Bring some happiness in your house with values.</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>© 2023 Jwels</li>
        </section>
        <section>
          <li>About</li>
          <NavLink className="footer-link" to="https://github.com/vishalsoni7">
            {" "}
            <li>Github</li>{" "}
          </NavLink>
          <NavLink className="footer-link" to="https://twitter.com/Vishsoni7">
            {" "}
            <li>Twitter</li>
          </NavLink>
          <NavLink
            className="footer-link"
            to="https://www.linkedin.com/in/vishal-soni-b21a4a1b8/"
          >
            {" "}
            <li>LinkedIn</li>
          </NavLink>
          <NavLink
            className="footer-link"
            to="https://www.instagram.com/vishaallsoni/"
          >
            {" "}
            <li>Instagram</li>
          </NavLink>
        </section>
        <section>
          <NavLink className="footer-link" to="/signup">
            {" "}
            <li>Sign Up</li>
          </NavLink>

          <NavLink className="footer-link" to="/signin">
            {" "}
            <li>Sign In</li>
          </NavLink>
        </section>
      </footer>
    </div>
  );
};
