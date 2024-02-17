/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

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

  const sorting = (option) => {
    const sortedProducts = [...productInfo];
    switch (option) {
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProductInfo(sortedProducts);
  };

  if(productInfo.length === 0){
    return <Shimmer/>
  }

  return (
    <>
      <div className="product-cat-container">
        <div className="product-controls">
          <h1>{currTitle}</h1>
          <div>
            <div className="sort-selector">
              <form action="#">
                <label htmlFor="sort">Sort by</label>
                <select
                  name="sort"
                  id="sort"
                  className="sort-selector-style"
                  onChange={(e) => {
                    sorting(e.target.value);
                  }}
                >
                  <option value="lowest">Price(lowest)</option>
                  <option value="highest">Price(highest)</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <div className="product-showcase-page">
          {productInfo.map((product) => (
            <Link key={product.id} to={`/product-details/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
