import React from "react";

const cartReducer = (state, action) => {
  let { id, productCount, singleData } = action.payload;

  console.log(singleData);

  return state;
};

export default cartReducer;
