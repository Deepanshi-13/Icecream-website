import React, { useState } from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import icecream from "../../assets/ice-cream.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={icecream} alt="ice-cream" />
        <div className="navbar-logo">ScoopieDoo</div>
      </div>

      <div className={`navbar-links ${showMenu ? "mobile" : ""}`}>
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>

      <input type="text" placeholder="Search" />

      <div className="ham-menu">
        <label className="toggle-btn" onClick={handleButtonToggle}>
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>

      <div className="navbar-cart">
        <ShoppingCartOutlined className="cart-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
