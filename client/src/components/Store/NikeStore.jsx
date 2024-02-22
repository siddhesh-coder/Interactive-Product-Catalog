import React, { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://real-time-product-search.p.rapidapi.com/search',
    params: {
      q: 'clothes',
      country: 'us',
      language: 'en'
    },
    headers: {
      'X-RapidAPI-Key': 'db221198femsh0ce5fcf5ad14eebp18ac1djsn82684f7bdbb6',
      'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
    }
  };

const NikeStore = () => {
    const [data, setData] = useState('');

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>NikeStore</div>
  )
}

export default NikeStore