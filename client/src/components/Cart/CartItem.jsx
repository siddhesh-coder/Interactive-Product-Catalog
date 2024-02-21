import FormatePrice from "../FormatPrice/FormatePrice";
import CartAmount from "../CartAmount/CartAmount";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cart_context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import useNotification from "../../hooks/useNotification";

const CartItem = ({ id, name, price, productCount, image }) => {
  const { removeItem, setDecrement, setIncrement } = useCartContext();
  const notify = useNotification({ message: "Item removed" });

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p className="cart-pro-title">{name}</p>
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

      <Link>
        <FaTrash
          className="remove_icon"
          onClick={() => {
            removeItem(id);
            notify();
          }}
        />
      </Link>
    </div>
  );
};

export default CartItem;
