import React from 'react';
import './CartAmount.css';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartAmount = ({productCount, setIncrement, setDecrement}) => {
  return (
    <div className='cart-add-button'>
        <div className='productCount-toggle'>
            <button onClick={() => setDecrement()}>
                <FaMinus/>
            </button>
            <div className='productCount'>{productCount}</div>
            <button onClick={() => setIncrement()}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}

export default CartAmount;