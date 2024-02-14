/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './SingleProdutePage.css';
import { useParams } from 'react-router-dom';
import useSingleProduct from '../../hooks/useSingleProduct';

const SingleProductPage = () => {
    const productId = useParams();
    const singleData = useSingleProduct(productId);

    console.log(singleData); 
  return (
    <div>SingleProductPage</div>
  )
}

export default SingleProductPage;