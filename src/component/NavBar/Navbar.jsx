import React, { useState } from "react";
import "./Navbar.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import icecream from "../../assets/ice-cream.png";
import shoppingCart from "../../assets/shoppingCart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

const Navbar = () => {
  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);
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

      <input type="text" placeholder="Search" />

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
          <div className="Card_details" style={{width:"24rem",padding:"10"}}>
            <Table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Icecream Shop Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  getData.map((e)=>{
                    return(
                      <>
                        <tr>
                          <td>
                            <img src={e.image} />
                          </td>
                          <td>
                            <p style={{margin:"9px"}}>{e.flavor}</p>
                            <p style={{margin:"9px"}}>Price:{e.prize}₹</p>
                            <p style={{margin:"9px"}}>Quantity:0</p>
                          </td>
                         <hr/>
                        </tr>
                      </>
                    )
                  })
                }
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
