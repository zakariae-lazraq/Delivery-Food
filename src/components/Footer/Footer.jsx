import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="right-div">
          <img src={assets.logo} alt="Company Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus
            inventore pariatur, architecto sit cum magnam ipsam cumque
            exercitationem accusamus eos soluta libero voluptatibus dolor sint
            quos tempora molestias dolore.
          </p>
          <div className="icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="center-footer">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="left-footer">
          <h2>GET IN TOUCH</h2>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@company.com</p>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright &copy; 2020 Company Name</p>
      </div>
    </footer>
  );
}

export default Footer;
