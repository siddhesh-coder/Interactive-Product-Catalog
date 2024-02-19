import "./Navbar.css";
import company_logo from "../../assets/company_logo.webp";
import { AlignJustify, ShoppingCart, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../Context/cart_context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { total_item } = useCartContext();
  const [menuClicked, setMenuClicked] = useState(false);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    notify();
  };

  const notify = () => {
    toast.success("Successfully Logout", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const authButton = isAuthenticated ? (
    <button type="button" className="user-btn" onClick={handleLogout}>
      Log Out
    </button>
  ) : (
    <button type="button" className="user-btn" onClick={loginWithRedirect}>
      Log In
    </button>
  );

  const cartLink = isAuthenticated ? (
    <NavLink to={"/cart"} onClick={() => setMenuClicked(false)}>
      <ShoppingCart />
      <span className="cart-item-count">{total_item}</span>
    </NavLink>
  ) : (
    <NavLink onClick={loginWithRedirect}>
      <ShoppingCart />
      <span className="cart-item-count">{total_item}</span>
    </NavLink>
  );

  return (
    <header className="navbar">
      <Link to={"/"}>
        <img src={company_logo} alt="Company logo" className="nav-logo" />
      </Link>

      <nav className={menuClicked ? " menu-bar mobile-menu-link" : "menu-bar"}>
        <ul>
          <li>
            <NavLink to={"/"} onClick={() => setMenuClicked(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/product-page/${"men's clothing"}`} onClick={() => setMenuClicked(false)}>
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to={`/product-page/${"women's clothing"}`} onClick={() => setMenuClicked(false)}>
              Women
            </NavLink>
          </li>
          <li>{authButton}</li>
          <li className="cart-logo">{cartLink}</li>
        </ul>
      </nav>
      <button type="button" className="hamburger-menu" onClick={handleMenuClick}>
        {menuClicked ? <X /> : <AlignJustify />}
      </button>
    </header>
  );
};

export default Navbar;