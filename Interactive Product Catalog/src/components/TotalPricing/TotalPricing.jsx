import React from 'react';
import './TotalPricing.css';
import { useCartContext } from '../Context/cart_context';
import FormatPrice from '../FormatPrice/FormatePrice';

const TotalPricing = () => {
   const { total_count, shipping_fee } = useCartContext();
  return (
    <div className='pricing-container'>
      <div className='pricing-title'>
         <p>Order Details</p>
      </div>

      <hr />

       <div className='price-flex'>
        <span>
           Original Price:
        </span>
        <span>
            <FormatPrice price={total_count}/>
        </span>
       </div>

       <div className='price-flex'>
         <span>
            Shipping Price:
         </span>
         <span>
            <del><FormatPrice price={shipping_fee}/></del>
         </span>
       </div>

       <hr />

       <div className='price-flex'>
          <span>
            Total Amount:
          </span>
          <span>
          <FormatPrice price={total_count}/>
          </span>
       </div>

       <button>
         <span>Pay</span><span> <FormatPrice price={total_count}/></span>
       </button>
    </div>
  )
}

export default TotalPricing;