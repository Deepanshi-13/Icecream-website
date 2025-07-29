import React, { useState } from "react";
import "./Navbar.css";
import {
  ShoppingCartOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import icecream from "../../assets/ice-cream.png";
import shoppingCart from "../../assets/shoppingCart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE, DECREMENT, INCREMENT } from "../../Redux/actions/action";
import { Avatar, Dropdown, Menu as AntMenu } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartMenu from "../NavBar/CartMenu.jsx";

const Navbar = () => {
  const getData = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const remove = (e) => dispatch(REMOVE(e));
  const decrement = (e) => dispatch(DECREMENT(e));
  const increment = (e) => dispatch(INCREMENT(e));

  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => setShowMenu(!showMenu);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const calculateTotal = () => {
    return getData
      .reduce((total, item) => total + Number(item.price * item.quantity), 0)
      .toFixed(2);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    toast.success("Logged out successfully!", {
      autoClose: 1500,
      onClose: () => navigate("/login"),
    });
  };

  const userMenu = (
    <AntMenu>
      <AntMenu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Logout
      </AntMenu.Item>
    </AntMenu>
  );

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={icecream} alt="ice-cream" />
        <div className="navbar-logo">ScoopieDoo</div>
      </div>

      <div className={`navbar-links ${showMenu ? "mobile" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </div>

      <div className="ham-menu">
        <label className="toggle-btn" onClick={handleButtonToggle}>
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>

      {/* Avatar */}
      <Dropdown overlay={userMenu} placement="bottomRight">
        <Avatar
          style={{
            backgroundColor: "#87d068",
            cursor: "pointer",
            marginLeft: "20px",
            fontSize: "32px",
            padding: "1.3rem"
          }}
        >
          {username ? username[0].toUpperCase() : <UserOutlined />}
        </Avatar>
      </Dropdown>

      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Cart Icon */}
        <div className="navbar-cart">
          <ShoppingCartOutlined
            className="cart-icon"
            onClick={handleClick}
          />
          <span className="cart-number">{getData.length}</span>
        </div>
      </div>

      <CartMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleClose}
        getData={getData}
        remove={remove}
        increment={increment}
        decrement={decrement}
        calculateTotal={calculateTotal}
      />

      <ToastContainer position="top-center" />
    </nav>
  );
};

export default Navbar;
