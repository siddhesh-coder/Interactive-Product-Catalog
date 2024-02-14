/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};

export default useFetchData;
