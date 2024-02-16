import React from "react";
import "./Cart.css";
import { useCartContext } from "../Context/cart_context";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { NO_ITEM } from '../../constants/constants';
import TotalPricing from "../TotalPricing/TotalPricing";

const Cart = () => {
  const { cart, deleteCart } = useCartContext();

  if(cart.length === 0){
     return (
     <div className="no-item"><img src={NO_ITEM} alt="no Item"/></div>
     )
  }

  return (
    <div className="cart-main-container">
      <div className="cart_heading grid-five-column">
        <p>Item</p>
        <p className="cart_hide">Price</p>
        <p>Quantity</p>
        <p className="cart_hide">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr/>

      <div className="cart-item">
         {
          cart.map((item) => <CartItem key={item.id} {...item}/>)
         }
      </div>
      <hr/>
      <div className="clear-cart-back">
        <NavLink to={'/'}>
           <button  className="btn-cart store">Back to Store</button>
        </NavLink>
      <button className="btn-cart" onClick={()=> deleteCart()}>Clear Cart</button>
      </div>

      <TotalPricing/>
    </div>
  );
};

export default Cart;
