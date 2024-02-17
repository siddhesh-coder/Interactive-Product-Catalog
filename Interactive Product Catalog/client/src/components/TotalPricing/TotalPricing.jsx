import React from "react";
import "./TotalPricing.css";
import { useCartContext } from "../Context/cart_context";
import FormatPrice from "../FormatPrice/FormatePrice";
import { loadStripe } from "@stripe/stripe-js";

const TotalPricing = () => {
  const { total_count, shipping_fee, cart } = useCartContext();

  console.log(cart);

  const makePayment = async()=>{
   const stripe = await loadStripe("pk_test_51OkVrWSBDOVe4PWz07sAg0uzPGlVWsVxRjpZGzh00691A6YOX4HIqVAWzs0kZtIDO5XUamu3rGB8ag59eczlTKxQ00OMOctbDq");

   const body = {
       products: cart
   }
   const headers = {
       "Content-Type":"application/json"
   }
   const response = await fetch("http://localhost:7000/api/create-checkout-session",{
       method:"POST",
       headers:headers,
       body:JSON.stringify(body)
   });

   const session = await response.json();

   const result = stripe.redirectToCheckout({
       sessionId:session.id
   });
   
   if(result.error){
       console.log(result.error);
   }
}

  return (
    <div className="pricing-container">
      <div className="pricing-title">
        <p>Order Details</p>
      </div>

      <hr />

      <div className="price-flex">
        <span>Original Price:</span>
        <span>
          <FormatPrice price={total_count} />
        </span>
      </div>

      <div className="price-flex">
        <span>Shipping Price:</span>
        <span>
          <del>
            <FormatPrice price={shipping_fee} />
          </del>
        </span>
      </div>

      <hr />

      <div className="price-flex">
        <span>Total Amount:</span>
        <span>
          <FormatPrice price={total_count} />
        </span>
      </div>

      <button onClick={makePayment}>
        <span>Checkout</span>
      </button>
    </div>
  );
};

export default TotalPricing;
