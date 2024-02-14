import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";

const ProductPage = () => {
  const data = useFetchData();
  const [productInfo, setProductInfo] = useState([]);
  const [currTitle, setCurrTitle] = useState("");
  const { categoryId } = useParams();

  useEffect(() => {
    if (data) {
      const filteredProducts = data.filter(
        (item) => item.category === categoryId
      );
      setProductInfo(filteredProducts);
    }
    titleOfProduct(categoryId);
  }, [categoryId, data]);

  const titleOfProduct = (categoryId) => {
    switch (categoryId) {
      case "men's clothing":
        setCurrTitle("MEN COLLECTION");
        break;
      case "women's clothing":
        setCurrTitle("WOMEN COLLECTION");
        break;
      case "jewelery":
        setCurrTitle("JEWELLERY COLLECTION");
        break;
      case "electronics":
        setCurrTitle("ELECTRONICS");
        break;
      default:
        setCurrTitle("");
    }
  };
  console.log(categoryId);
  return (
    <>
      <div className="product-cat-container">
        <h1>{currTitle}</h1>
        <div className="product-showcase-page">
          {productInfo.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
