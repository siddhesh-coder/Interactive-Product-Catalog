import "./Navbar.css";
import company_logo from "../../assets/company_logo.webp";
import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../Context/cart_context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { total_item } = useCartContext();

  const notify = () => {
    toast.success('Successfully Logout', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <header className="navbar">
      <Link to={"/"}>
        <img src={company_logo} alt="Company logo" className="nav-logo" />
      </Link>

      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/product-details/men's clothing"}>Men</NavLink>
        </li>

        <li>
          <NavLink>Women</NavLink>
        </li>

        {isAuthenticated ? (
          <li>
            <button
              className="user-btn"
              onClick={() =>{
                logout({ logoutParams: { returnTo: window.location.origin } })
                notify();
              }}
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button className="user-btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </li>
        )}

        {isAuthenticated ? (
          <li className="cart-logo">
            <NavLink to={"/cart"}>
              <ShoppingCart />
              <span className="cart-item-count">{total_item}</span>
            </NavLink>
          </li>
        ) : (
          <li className="cart-logo">
            <NavLink onClick={() => loginWithRedirect()}>
              <ShoppingCart />
              <span className="cart-item-count">{total_item}</span>
            </NavLink>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Navbar;
