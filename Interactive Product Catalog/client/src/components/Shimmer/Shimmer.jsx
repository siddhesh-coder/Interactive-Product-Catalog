// Shimmer.js

import React from "react";
import "./Shimmer.css";

const ShimmerCard = () => {
  return (
    <div className="card">
      <div className="shimmer-animation"></div>
    </div>
  );
};

const Shimmer = () => {
  const emptyCards = Array.from({ length: 7 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return <div className="container">{emptyCards}</div>;
};

export default Shimmer;
