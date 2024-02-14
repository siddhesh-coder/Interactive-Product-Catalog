// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Category.css";
import menImg from "../../assets/Category_image/men.webp";
import womenImg from "../../assets/Category_image/women.webp";
import jewelleryImg from "../../assets/Category_image/j.webp";
import electronicImg from "../../assets/Category_image/electronic.webp";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const categories = [
    { image: menImg, category: "MEN", id: "men's clothing" },
    { image: womenImg, category: "WOMEN", id: "women's clothing" },
    { image: jewelleryImg, category: "JEWELLERY", id: "jewelery" },
    { image: electronicImg, category: "ELECTRONICS", id: 'electronics' },
  ];

  return (
    <div className="category-container">
      <div className="category-title">SHOP BY CATEGORY</div>
      <div className="category-list">
        {categories.map((data) => (
          <CategoryCard key={data.id} card={data} />
        ))}
      </div>
    </div>
  );
};

export default Category;
