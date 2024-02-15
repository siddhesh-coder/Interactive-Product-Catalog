/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./SingleProductPage.css";
import { useParams } from "react-router-dom";
import useSingleProduct from "../../hooks/useSingleProduct";
import FormatePrice from "../FormatPrice/FormatePrice";
import Ratings from "../Ratings/Ratings";
import DeliveryService from "../DeliveryService/DeliveryService";
import CartAmount from "../CartAmount/CartAmount";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartContext } from "../Context/cart_context";

const SingleProductPage = () => {
  const { addToCart } = useCartContext();
  const productId = useParams();
  const singleData = useSingleProduct(productId);
  const [productCount, setProductCount] = useState(1);

  const { title, rating, price, description, image, id } = singleData || "";

  const { rate, count } = rating || "";

  const setIncrement = () =>
    productCount < count
      ? setProductCount(productCount + 1)
      : setProductCount(count);

  const setDecrement = () =>
    productCount > 1 ? setProductCount(productCount - 1) : productCount(1);

  return (
    <div className="product-details">
      <div className="single-product-container">
        <div className="product-images">
          <img src={image} alt="productimg" />
        </div>
        <div className="product-info">
          <h3>{title}</h3>
          <Ratings rate={rate} />
          <p className="product-price-data">
            Price:
            <del>{<FormatePrice price={price + 12.04} />}</del>
          </p>
          <p className="product-price-data product-real-price">
            <span className="flash-span">Deal of the Day:</span>
            <FormatePrice price={price} />
          </p>
          <p className="single-description">{description}</p>
          <DeliveryService />
          <div className="product-aval">
            <p>
              Available:{" "}
              <span>{count > 0 ? `${count} in stock` : "Out of stock"}</span>
            </p>
          </div>
          <div className="cart-submission">
            <CartAmount
              productCount={productCount}
              setIncrement={setIncrement}
              setDecrement={setDecrement}
            />
            <NavLink
              to="/cart"
              onClick={() => addToCart(id, productCount, singleData)}
            >
              <button className="add-button">
                <p>Add to cart</p>
                <div className="cart-add-icon">
                  <ShoppingCart />
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
