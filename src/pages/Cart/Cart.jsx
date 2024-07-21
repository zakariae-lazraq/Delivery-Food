import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

function Cart() {
  const { removeFromCart, cartItems, food_list, isEmpty, getTotalAmount } =
    useContext(StoreContext);
  const [fees, setFees] = useState(0);

  console.log(getTotalAmount());

  return (
    <div className="cart">
      <div className="cart__header">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div className="cart__body">
        {isEmpty ? (
          <h1 className="cart-title">The Cart is Empty</h1>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div className="cart__item" key={index}>
                    <div className="cart__item__image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart__item__title">{item.name}</div>
                    <div className="cart__item__price">${item.price}</div>
                    <div className="cart__item__quantity">
                      {cartItems[item._id]}
                    </div>
                    <div className="cart__item__total">
                      ${item.price * cartItems[item._id]}
                    </div>
                    <div
                      className="cart__item__remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </div>
                  </div>
                </>
              );
            }
            return null; // Ensure to return null when condition is not met to avoid React warnings.
          })
        )}
      </div>
      <div className="cart-totals-box">
        <div className="cart-totals-container">
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
          <Link to={'/order'}>
           
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
          </Link>
        </div>
        <div className="contact-cart">
          <p>if you have a promo code , Enter it here</p>
          <div className="input">
            <input type="text" placeholder="promo code" />
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
