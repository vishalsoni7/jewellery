import React from "react";
import { Link } from "react-router-dom";

import "../component/footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <section>
          <li>
            {" "}
            <Link className="footer-link" to="/">
              Jwels{" "}
            </Link>{" "}
          </li>
          <li>Bring some happiness in your house with values.</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>© 2023 Jwels</li>
        </section>
        <section>
          <li>About</li>
          <a
            className="footer-link"
            href="https://github.com/vishalsoni7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <li>Github</li>{" "}
          </a>
          <a
            className="footer-link"
            href="https://twitter.com/Vishsoni7"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <li>Twitter</li>
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/vishal-soni-b21a4a1b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <li>LinkedIn</li>
          </a>
          <a
            className="footer-link"
            href="https://www.instagram.com/vishaallsoni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <li>Instagram</li>
          </a>
        </section>
        <section>
          <Link className="footer-link" to="/signup">
            {" "}
            <li>Sign Up</li>
          </Link>

          <Link className="footer-link" to="/signin">
            {" "}
            <li>Sign In</li>
          </Link>
        </section>
      </footer>
    </div>
  );
};
