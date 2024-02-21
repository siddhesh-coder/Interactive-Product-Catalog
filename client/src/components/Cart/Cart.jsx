import { useEffect, useState } from "react";
import "./Cart.css";
import { useCartContext } from "../Context/cart_context";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { NO_ITEM } from "../../utils/constants/constants";
import TotalPricing from "../TotalPricing/TotalPricing";
import { auth } from "../../firebase";
import useNotification from "../../hooks/useNotification";

const Cart = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { cart, deleteCart } = useCartContext();

  const notify = useNotification({ message: "Cart successfully cleared" });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="auth-msg-cart">
        <p>Please log in to view your cart.</p>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    );
  }

  if (cart.length === 0 && isAuthenticated) {
    return (
      <div className="no-item">
        <img src={NO_ITEM} alt="no Item" />
      </div>
    );
  }

  return (
    <div className="cart-main-container">
      <div className="cart_heading grid-five-column">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>Remove</p>
      </div>

      <div className="cart-item">
        {cart.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="clear-cart-back">
        <NavLink to={"/"}>
          <button type="button" className="btn-cart store">
            Back to Store
          </button>
        </NavLink>
        <button
          type="button"
          className="btn-cart"
          onClick={() => {
            deleteCart();
            notify();
          }}
        >
          Clear Cart
        </button>
      </div>

      <TotalPricing />
    </div>
  );
};

export default Cart;
