import React, { useEffect, useState } from "react";
import "./ImageCarousal.css";

import image1 from "../../assets/Image_Carousal/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.webp";
import image2 from "../../assets/Image_Carousal/AB-Collection-Banner-Desktop_1.webp";
import image3 from "../../assets/Image_Carousal/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.webp";
import image4 from "../../assets/Image_Carousal/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.webp";
import image5 from "../../assets/Image_Carousal/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.webp";
import image6 from "../../assets/Image_Carousal/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.webp";
import image7 from "../../assets/Image_Carousal/1440_413_Desktop_2.webp";
import image8 from "../../assets/Image_Carousal/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.webp";
import image9 from "../../assets/Image_Carousal/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.webp";
import image10 from "../../assets/Image_Carousal/09f0df54-6f8f-4bb0-a4b9-3b374d4538561649782019495-Top-Brands-2_Desk_Banner.webp";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];
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
