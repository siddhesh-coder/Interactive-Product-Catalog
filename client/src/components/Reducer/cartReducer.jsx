import React from "react";

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, productCount, singleData } = action.payload;

    const existingItem = state.cart.find(
      (item) => item.id === id + `${singleData.title.replace(/[\s.,-]/g, "")}`
    );

    if (existingItem) {
      let updateProductCart = state.cart.map((currItem) => {
        if (
          currItem.id ===
          id + `${singleData.title.replace(/[\s.,-]/g, "")}`
        ) {
          let newProductCount = currItem.productCount + productCount;
          if (newProductCount >= currItem.productCount) {
            newProductCount = currItem.productCount;
          }
          return {
            ...currItem,
            productCount: newProductCount,
          };
        } else {
          return currItem;
        }
      });
      return {
        ...state,
        cart: updateProductCart,
      };
    } else {
      let cartProduct = {
        id: id + `${singleData.title.replace(/[\s.,-]/g, "")}`,
        name: singleData.title,
        productCount,
        image: singleData.image,
        price: singleData.price,
        max: singleData.rating.count,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "DELETE_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updateProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        let newProductCount = currItem.productCount - 1;
        if (newProductCount <= 1) {
          newProductCount = 1;
        }
        return {
          ...currItem,
          productCount: newProductCount,
        };
      } else {
        return currItem;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "SET_INCREMENT") {
    let updateProduct = state.cart.map((currItem) => {
      if (currItem.id === action.payload) {
        console.log(currItem);
        let newProductCount = currItem.productCount + 1;
        if (newProductCount >= currItem.max) {
          newProductCount = currItem.max;
        }
        return {
          ...currItem,
          productCount: newProductCount,
        };
      } else {
        return currItem;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "CART_COUNT") {
    let cartCount = state.cart.reduce((acc, currItem) => {
      let { productCount } = currItem;
      acc += productCount;
      return acc;
    }, 0);

    return {
      ...state,
      total_item: cartCount,
    };
  }

  if (action.type === "TOTAL_PRICE") {
    let totalPrice = state.cart.reduce((acc, currItem) => {
      let { price, productCount } = currItem;
      acc += price * productCount;
      return acc;
    }, 0);

    return {
      ...state,
      total_count: totalPrice,
    };
  }

  return state;
};

export default cartReducer;
