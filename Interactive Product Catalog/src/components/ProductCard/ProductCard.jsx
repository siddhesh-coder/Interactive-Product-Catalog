/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Star, StarHalf, ShoppingCart, Heart } from "lucide-react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { title, image, price } = product;
  console.log(product);
  return (
    <div className="product-card">
      <img className="img-card-product" src={image} alt="" />

      <div className="product-content-card">
        <div className="review-container">
          <div className="stars">
            <span>Reviews</span>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarHalf />
          </div>
          <h5 className="price">${price}</h5>
        </div>
        <h4 className="product-name">{title}</h4>
        <div className="pro-button-container">
          <div className="like-button">
            <Heart />
          </div>
          {/* <div className="card-button">
            <p>Add to cart</p>
            <div className="cart-icon">
              <ShoppingCart />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
