import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  const { image, category, id } = card;
  console.log(id);
  return (
    <Link to={`/product-page/${id}`}>
      <div className="category-card">
        <img className="card-img" src={image} alt="card" />
        <div className="card-name">{category}</div>
      </div>
    </Link>
  );
};

export default CategoryCard;
