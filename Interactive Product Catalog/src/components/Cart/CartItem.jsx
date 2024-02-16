import React, { useState } from "react";
import FormatePrice from "../FormatPrice/FormatePrice";
import CartAmount from "../CartAmount/CartAmount";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cart_context";

const CartItem = ({ id, name, price, productCount, image }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <FormatePrice price={price} />
        </p>
      </div>

      <CartAmount
        productCount={productCount}
        setIncrement={() => setIncrement(id)}
        setDecrement={() => setDecrement(id)}
      />

      <div className="cart-hide">
        <p>
          <FormatePrice price={price * productCount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
