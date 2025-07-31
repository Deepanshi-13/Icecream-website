import React from "react";
import { Menu, Table } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import shoppingCart from "../../assets/shoppingCart.png";
import "./CartMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE, INCREMENT, DECREMENT } from "../../Redux/actions/action";

const CartMenu = ({ anchorEl, open, handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getData = useSelector((state) => state.cart.carts);

  const remove = (e) => dispatch(REMOVE(e));
  const increment = (e) => dispatch(INCREMENT(e));
  const decrement = (e) => dispatch(DECREMENT(e));


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
          <button style={{ background: "green", color: "#fff", padding: "6px 12px" }}
            onClick={() => {
              handleClose();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
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
