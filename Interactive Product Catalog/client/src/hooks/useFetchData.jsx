/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { STORE_API } from "../utils/constants/constants";

const useFetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(STORE_API);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return data;
};

export default useFetchData;
