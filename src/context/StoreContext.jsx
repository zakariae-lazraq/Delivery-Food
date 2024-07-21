import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [foods, setFoods] = useState(food_list);
  const [cartItems, setCartItems] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);

  const getTotalAmount = () => {
    let total = 0;
    food_list.map((item) => {
      cartItems[item._id] > 0 && (total += item.price * cartItems[item._id]);
    });
    return total;
  };

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevCartItem) => ({ ...prevCartItem, [itemId]: 1 }));
    } else {
      setCartItems((prevCartItem) => ({
        ...prevCartItem,
        [itemId]: prevCartItem[itemId] + 1,
      }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCartItem) => {
      const updatedCart = { ...prevCartItem };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    const isCartEmpty = Object.values(cartItems).every((item) => item === 0);
    setIsEmpty(isCartEmpty);
  }, [cartItems]);

  const contextValues = {
    foods,
    setFoods,
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    setIsEmpty,
    isEmpty,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
