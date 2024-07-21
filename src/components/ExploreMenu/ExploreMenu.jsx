import React, { useContext } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu">
      <h2>Explore our menu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto
        temporibus fuga eum sapiente vero amet <br /> debitis quasi rerum autem
        voluptatum accusantium deserunt! At, nam. Deleniti minus possimus
        repellat enim!
      </p>
      <div className="menus-items">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="menu-item"
            key={index}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <h3>{item.menu_name}</h3>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
