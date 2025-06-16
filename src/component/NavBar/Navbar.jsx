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
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import { REMOVE, DECREMENT, INCREMENT } from "../../Redux/actions/action";
import { Avatar, Dropdown, Menu as AntMenu } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <li>
          <Link className="active" to="/">Home</Link>
        </li>
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
          }}
        >
          {username ? username[0].toUpperCase() : <UserOutlined />}
        </Avatar>
      </Dropdown>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Cart */}
        <div className="navbar-cart">
          <ShoppingCartOutlined
            className="cart-icon"
            onClick={handleClick}
          />
          <span className="cart-number">{getData.length}</span>
        </div>

      </div>

      {/* Cart Menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {getData.length ? (
          <div className="Card_details" style={{ width: "24rem", padding: "10px" }}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Icecream</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <NavLink to={`/flavorDetails/${e.id}`} onClick={handleClose}>
                        <img src={e.image} alt="icecream" />
                      </NavLink>
                    </td>
                    <td>
                      <p><b>Flavor:</b> {e.flavor}</p>
                      <p><b>Price:</b> ₹{e.price}</p>
                      <p>
                        <b>Qty:</b>
                        <p className="quantity-controls">
                          <button onClick={() => decrement(e)}>-</button>
                          <span>{e.quantity}</span>
                          <button onClick={() => increment(e)}>+</button>
                        </p>

                      </p>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "hotpink", cursor: "pointer" }}
                        onClick={() => remove(e)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p><b>Total:</b> ₹{calculateTotal()}</p>
          </div>
        ) : (
          <div className="Card_details">
            <i className="fas fa-close smallclose" onClick={handleClose}></i>
            <p>Your Cart is Empty</p>
            <img src={shoppingCart} alt="cart" />
          </div>
        )}
      </Menu>

      <ToastContainer position="top-center" />
    </nav>
  );
};

export default Navbar;
