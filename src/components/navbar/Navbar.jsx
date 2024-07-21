import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ showLogin, setShowLogin }) => {
  const [active, setActive] = useState("home");
  // const [showDot, setShowDot] = useState(false);
  const { getTotalAmount } = useContext(StoreContext);

  const handleItemClick = (item) => {
    setActive(item);
  };
  // useEffect(() => {
  //   if (Object.keys(cartItems).length > 0) {
  //     setShowDot(true);
  //   } else {
  //     setShowDot(false);
  //   }
  // }, [cartItems]);

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <Link to={'/'}>
          <li
            onClick={() => handleItemClick("home")}
            className={active === "home" ? "active" : ""}
          >
            home
          </li>
        </Link>
        <li
          onClick={() => handleItemClick("menu")}
          className={active === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => handleItemClick("mobile app")}
          className={active === "mobile app" ? "active" : ""}
        >
          mobile app
        </li>
        <Link to={"/order"}>
          <li
            onClick={() => handleItemClick("contact us")}
            className={active === "contact us" ? "active" : ""}
          >
            contact us
          </li>
        </Link>
      </ul>
      <div className="right-nav">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img
              src={assets.basket_icon}
              alt="Basket"
              className="basket-icon"
            />
          </Link>

          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button className="signin-btn" onClick={() => setShowLogin(true)}>
          sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
