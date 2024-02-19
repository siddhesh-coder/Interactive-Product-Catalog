import './payment.css';
import { SUCCESS } from '../../utils/constants/constants';

const Success = () => {
  return (
    <div className='payment-container'>
      <img src={SUCCESS} alt="success" />
    </div>
  )
}

export default Success;