import React from "react";
import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE, INCREMENT, DECREMENT } from "../../Redux/actions/action";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = +subtotal.toFixed(2);

  const remove = (e) => dispatch(REMOVE(e));
  const increment = (e) => dispatch(INCREMENT(e));
  const decrement = (e) => dispatch(DECREMENT(e));

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p className="subtitle">Complete your ice cream order</p>

      <div className="checkout-content">
        <div className="checkout-left">
          {/* Customer Info */}
          <div className="checkout-box">
            <h2>👤 Customer Information</h2>
            <div className="input-grid">
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Email" className="full" />
              <input placeholder="Phone" className="full" />
            </div>
          </div>

          {/* Delivery Address */}
          <div className="checkout-box">
            <h2>📍 Delivery Address</h2>
            <div className="input-grid">
              <input placeholder="Street Address" className="full" />
              <input placeholder="City" />
              <select>
                <option>Select State</option>
                <option>Chandigarh</option>
                <option>Delhi</option>
                <option>Noida</option>
              </select>
              <input placeholder="PIN Code" />
            </div>
          </div>

          {/* Payment Info */}
          <div className="checkout-box">
            <h2>💳 Payment Information</h2>
            <div className="input-grid">
              <input placeholder="Card Number" className="full" />
              <input placeholder="Name on Card" className="full" />
              <input placeholder="MM/YY" />
              <input placeholder="CVV" />
            </div>
          </div>
        </div>

        <div className="checkout-right">
          <div className="checkout-box">
            <h2>🛒 Order Summary</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="item-row">
                <img src={item.image} alt={item.flavor} className="item-image" />
                <div className="item-details">
                  <p className="item-name">{item.flavor}</p>
                  <p><strong>Price:</strong> ₹{Number(item.price).toFixed(2)}</p>
                  <p className="quantity-controls">
                    <button onClick={() => decrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increment(item)}>+</button>
                  </p>
                </div>
                <div className="item-remove">
                  <button className="remove-btn" onClick={() => remove(item)}>Remove</button>
                </div>
              </div>
            ))}

            <div className="summary-line total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button className="place-order">Place Order 🍦</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
