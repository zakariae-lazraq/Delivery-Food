import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodList from "../../components/FoodList/FoodList";
import Footer from "../../components/Footer/Footer";
import AddDownload from "../../components/AddDownload/AddDownload";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className="home-container">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodList category={category} setCategory={setCategory} />
      <AddDownload />
    </div>
  );
}

export default Home;
