import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    return () => fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setData(response.data);
  };

  return data;
};

export default useFetchData;
