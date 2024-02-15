import React from "react";
import "./Ratings.css";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rate }) => {
  const ratingStars = Array.from({ length: 5 }, (_, i) => {
    let num = i + 0.5;
    return (
      <span key={i}>
        {rate >= i ? (
          <FaStar className="star-icon-rate" />
        ) : rate >= num ? (
          <FaStarHalf className="star-icon-rate" />
        ) : (
          <AiOutlineStar className="star-icon-rate" />
        )}
      </span>
    );
  });

  return (
    <div className="icon-style">
        {ratingStars}
    </div>
  );
};

export default Ratings;
