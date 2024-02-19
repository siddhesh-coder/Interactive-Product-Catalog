import { CANCEL } from "../../utils/constants/constants";
import "./payment.css";

const Cancel = () => {
  return (
    <div className="payment-container">
      <img src={CANCEL} alt="cancel" />
    </div>
  );
};

export default Cancel;
