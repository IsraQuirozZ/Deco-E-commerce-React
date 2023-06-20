import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: 123-456-7890</p>
          <p>Email: deco@deco.com</p>
          <p>Adress: Gran Vía 123, Madrid</p>
        </div>
        <div className="footer-section">
          <h4>Usefuls Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Products</Link>
            </li>
            <li>
              <Link to="/aboutUS">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to="https://github.com/IsraQuirozZ">
              <i className="fab fa-github"></i>
            </Link>
            <Link to="https://www.facebook.com/israel.quirozdezaldo/">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/isra_quirozz/">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Decó. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
