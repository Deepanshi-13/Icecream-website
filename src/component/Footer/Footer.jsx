import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section logo">
          <h2>🍦 IceCream World</h2>
          <p>Making life sweeter, one scoop at a time!</p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href="https://twitter.com/i/flow/signup"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> support@icecreamworld.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IceCream World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
