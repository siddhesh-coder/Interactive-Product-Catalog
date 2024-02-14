import React from "react";
import './Home.css'
import ImageCarousal from "../ImageCarousal/ImageCarousal";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div className="content">
        <ImageCarousal/>
        <Category/>
    </div>
  );
};

export default Home;
