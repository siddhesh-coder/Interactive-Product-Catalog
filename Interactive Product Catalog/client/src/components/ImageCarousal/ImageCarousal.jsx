import React, { useEffect, useState } from "react";
import "./ImageCarousal.css";
import * as imageProvider from './imageProvider';

const images = Object.values(imageProvider);
const totalImages = images.length;

const ImageCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forward) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [forward]);

  useEffect(() => {
    setMarginLeft(-currentIndex * 100);
  }, [currentIndex]);

  return (
    <div className="img-container-c">
      <div className="image-carousal-c" style={{ marginLeft: `${marginLeft}%` }}>
        {images.map((image, index) => (
          <div className="card-c" key={index}>
            <img src={image} alt={`image${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousal;
