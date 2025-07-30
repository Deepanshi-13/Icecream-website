import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
import Button from "../Button/Button";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.carts);

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="checkout-content">
          {cartItems.map((item, index) => (
            <div className="checkout-item" key={index}>
              <div
                className="item-image"
                style={{ backgroundColor: item.background }}
              >
                <img src={item.image} alt={item.flavor} />
              </div>
              <div className="item-details">
                <h4>{item.flavor}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="checkout-summary">
            <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
            <Button
              className="checkout-btn"
              value="Place Order"
              onClick={() => {
                // Placeholder for actual order placement logic
                alert("Order Placed!");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
