import React from "react";
import { assets } from "../../assets/assets";
import "./AddDownload.css";

function AddDownload() {
  return (
    <div className="download-container">
      <h1>
        For a Better Experience, Download <br />
        the Tomato App
      </h1>
      <div className="download-btn-container">
        <img src={assets.play_store} alt="Download on Google Play" />
        <img src={assets.app_store} alt="Download on the App Store" />
      </div>
    </div>
  );
}

export default AddDownload;
