import React from "react";
import { Menu, Table } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import shoppingCart from "../../assets/shoppingCart.png";
import "./CartMenu.css"; 

const CartMenu = ({
  anchorEl,
  open,
  handleClose,
  getData,
  remove,
  increment,
  decrement,
  calculateTotal,
}) => {
  return (
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
          <p><b>Total Price:</b> ₹{calculateTotal()}</p>
          <button style={{ background: "green" }}>Checkout</button>
        </div>
      ) : (
        <div className="Card_details">
          <i className="fas fa-close smallclose" onClick={handleClose}></i>
          <p>Your Cart is Empty</p>
          <img src={shoppingCart} alt="cart" />
        </div>
      )}
    </Menu>
  );
};

export default CartMenu;
