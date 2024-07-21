import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, image, name, description, price }) {
  const { cartItems, setCartItems, addToCart, removeFromCart } =
    useContext(StoreContext);

  // Function to generate random star ratings
  const generateRandomStars = () => {
    const stars = [];
    const maxStars = 5;
    const randomCount = Math.floor(Math.random() * maxStars) + 1;

    for (let i = 0; i < maxStars; i++) {
      if (i < randomCount) {
        stars.push(<FaStar key={i} className="star" />);
      } else {
        stars.push(<FaStar key={i} className="star empty" />);
      }
    }
    return stars;
  };

  return (
    <div className="foodList-item" key={id}>
      <img src={image} alt="" />
      {!cartItems[id] ? (
        <img
          className="addIcon"
          src={assets.add_icon_white}
          alt="Add to Cart"
          onClick={() => addToCart(id)}
        />
      ) : (
        <div className="count">
          <img
            src={assets.remove_icon_red}
            alt="Remove from Cart"
            onClick={() => removeFromCart(id)}
          />
          {cartItems[id]}
          <img
            src={assets.add_icon_green}
            alt="Add to Cart"
            onClick={() => addToCart(id)}
          />
        </div>
      )}

      <h3 className="food-name">
        {name} <div className="star-rating">{generateRandomStars()}</div>
      </h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  );
}

export default FoodItem;
