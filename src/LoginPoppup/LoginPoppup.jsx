import React, { useState } from "react";
import "./LoginPoppup.css";
import { assets } from "../assets/assets";

const LoginPoppup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h1>{currState}</h1>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" />
          )}
          <input type="text" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
        </div>

        <button>
          {currState === "Sign Up" ? "Create An Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkBox" required />
          <p>By continuing, you agree to our Terms, Data Policy, and Cookies.</p>
        </div>

        {currState === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPoppup;
