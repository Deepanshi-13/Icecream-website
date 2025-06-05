import React, { useState } from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import icecream from "../../assets/ice-cream.png";
import shoppingCart from "../../assets/shoppingCart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mui/material";
import { REMOVE } from "../../Redux/actions/action";
import { DECREMENT } from "../../Redux/actions/action";
import { INCREMENT } from "../../Redux/actions/action";

const Navbar = () => {
  const getData = useSelector((state) => state.cart.carts);
  console.log(getData);
  const dispatch = useDispatch();
  const remove = (e) => {
    dispatch(REMOVE(e));
  };
  const decrement = (e) => {
    dispatch(DECREMENT(e));
  };
  const increment = (e) => {
    dispatch(INCREMENT(e));
  };

  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const calculateTotal = () => {
    return getData
      .reduce((Total, item) => {
        return Total + Number(item.price * item.quantity);
      }, 0)
      .toFixed(2);
  };

  console.log("Total Price:", calculateTotal());

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={icecream} alt="ice-cream" />
        <div className="navbar-logo">ScoopieDoo</div>
      </div>

      <div className={`navbar-links ${showMenu ? "mobile" : ""}`}>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
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

      
      <div className="ham-menu">
        <label className="toggle-btn" onClick={handleButtonToggle}>
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>

      <div className="navbar-cart">
        <ShoppingCartOutlined
          className="cart-icon"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <span className="cart-number">{getData.length}</span>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {getData.length ? (
          <div
            className="Card_details"
            style={{ width: "24rem", padding: "10" }}
          >
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Icecream Shop Name</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {getData.map((e) => (
                  <tr
                    key={e.id}
                    style={{
                      boxShadow: "0px 4px 8px rgba(72, 70, 70, 0.2)",
                    }}
                  >
                    <td>
                      <NavLink
                        to={`/flavorDetails/${e.id}`}
                        onClick={handleClose}
                      >
                        <img src={e.image} alt="icecream" />
                      </NavLink>
                    </td>
                    <td
                      style={{
                        alignItems: "baseline",
                        display: "flex",
                        flex: "start",
                        flexDirection: "column",
                      }}
                    >
                      <p style={{ margin: "9px" }}>
                        <b>Flavor</b>
                        {e.flavor}
                      </p>
                      <p style={{ margin: "9px" }}>
                        <b>Price:</b>
                        {e.price}
                      </p>
                      <p style={{ margin: "9px" }}>
                        <b>Quantity:</b>
                        <button
                          className="decrementBtn"
                          onClick={() => {
                            decrement(e);
                          }}
                        >
                          -
                        </button>
                        <span>{e.quantity}</span>
                        <button
                          className="incrementBtn"
                          onClick={() => {
                            increment(e);
                          }}
                        >
                          +
                        </button>
                      </p>
                    </td>
                    <td
                      style={{ textAlign: "center", verticalAlign: "middle" }}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          color: "hotpink",
                          fontSize: 20,
                          cursor: "pointer",
                          padding: "6px 12px",
                        }}
                        onClick={() => {
                          remove(e);
                        }}
                      />
                    </td>
                  </tr>
                ))}
                <p>
                  <b>Total</b>: ₹{calculateTotal()}
                </p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="Card_details">
            <i className="fas fa-close smallclose" onClick={handleClose}></i>
            <p>Your Card is Empty</p>
            <img src={shoppingCart} alt="card-image" />
          </div>
        )}
      </Menu>
    </nav>
  );
};

export default Navbar;
