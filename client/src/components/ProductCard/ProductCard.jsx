/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import "./ProductCard.css";
import FormatePrice from "../FormatPrice/FormatePrice";
import Ratings from "../Ratings/Ratings";

const ProductCard = ({ product }) => {
  const { title, image, price, rating } = product || "";
  const { rate } = rating || "";
  return (
    <div className="product-card">
      <img className="img-card-product" src={image} alt="" />

      <div className="product-content-card">
        <div className="review-container">
          <div className="card-rate">
            <span>Reviews</span>
            <Ratings rate={rate} />
          </div>

          <h5 className="price">{<FormatePrice price={price} />}</h5>
        </div>
        <h4 className="product-name">{title}</h4>
        <div className="pro-button-container">
          <div className="like-button">
            <Heart />
          </div>
          <div className="card-button">
            <p>Buy</p>
            <div className="cart-icon">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
