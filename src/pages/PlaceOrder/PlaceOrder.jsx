import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
function PlaceOrder() {
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <div className="order-container">
      <div className="form">
        <h1>Delivery Information</h1>
        <div className="input-col">
          <input type="text" placeholder="Firse name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="text" placeholder="Email Adress" />
        <input type="text" placeholder="Street" />
        <div className="input-col">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="input-col">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="cart-total-container">
        <h1>Cart Totals</h1>
        <div className="cart-total-item">
          <p>Subtotal: </p> <span>${getTotalAmount()}</span>
        </div>
        <div className="cart-total-item">
          {" "}
          <p>Delivery Fee </p> <span>${getTotalAmount() > 0 ? 2 : 0}</span>
        </div>
        <div className="cart-total-item">
          <p>Total: </p>{" "}
          <span>${getTotalAmount() > 0 ? 2 + getTotalAmount() : 0}</span>
        </div>
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
}

export default PlaceOrder;
