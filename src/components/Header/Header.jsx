import React, { useEffect } from "react";
import "./Header.css";

function Header() {
  useEffect(() => {
    const header = document.querySelector('.header');
    header.classList.add('show');
  }, []);

  return (
    <header className="header">
      <h1>
        Order your <br /> favourite food here
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque veniam
        quos deserunt? Blanditiis id, dolor illum sint quo laboriosam,
        voluptatibus animi adipisci assumenda esse, in necessitatibus! Ratione
        dignissimos quisquam sapiente.
      </p>
      <button>View Menu</button>
    </header>
  );
}

export default Header;
