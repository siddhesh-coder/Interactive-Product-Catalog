/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { STORE_API } from "../utils/constants/constants";

const useSingleProduct = ({productId}) => {
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
      fetchData();
      return () => fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`${STORE_API}/${productId}`);
        setSingleData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return singleData;
}

export default useSingleProduct