import React, { useContext, useEffect, useState } from "react";
import "./FoodList.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";

function FoodList({ category }) {
  const { foods, setFoods, food_list } = useContext(StoreContext);

  // useEffect(() => {
  //   // Check if foodList is populated, assuming it contains all foods initially

  //   if (category) {
  //     const filteredFoods = food_list.filter(
  //       (food) => food.category === category
  //     );
  //     setFoods(filteredFoods);
  //   } else {
  //     setFoods(foods);
  //   }
  // }, [category]);
  useEffect(() => {
    setFoods(food_list);
  }, []);
  return (
    <div className="foodList-container">
      <h1>Top dishes near you</h1>
      <div className="foodList-items">
        {foods.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodList;
