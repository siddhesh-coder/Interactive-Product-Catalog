import { useEffect, useState } from "react";
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

const ImageCarousal = () => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState("0%");
  const [forward, setForward] = useState(true);

  const shiftImg = (count) => {
    setMargin(`-${count * 10}%`);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forward) {
        if (count === 9) {
          setForward(false);
        } else {
          setCount((prevCount) => prevCount + 1);
        }
      } else {
        if (count === 0) {
          setForward(true);
        } else {
          setCount((prevCount) => prevCount - 1);
        }
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [count, forward]);

  useEffect(() => {
    shiftImg(count);
  }, [count]);

  return (
    <div className="img-container">
      <div className="image-carousal">
        <div className="card" style={{ marginLeft: margin }}>
          <img src={image1} alt="image1" />
        </div>
        <div className="card">
          <img src={image2} alt="image2" />
        </div>
        <div className="card">
          <img src={image3} alt="image3" />
        </div>
        <div className="card">
          <img src={image4} alt="image4" />
        </div>
        <div className="card">
          <img src={image5} alt="image5" />
        </div>
        <div className="card">
          <img src={image6} alt="image6" />
        </div>
        <div className="card">
          <img src={image7} alt="image7" />
        </div>
        <div className="card">
          <img src={image8} alt="image8" />
        </div>
        <div className="card">
          <img src={image9} alt="image9" />
        </div>
        <div className="card">
          <img src={image10} alt="image10" />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousal;
