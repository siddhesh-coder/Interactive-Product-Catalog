import "./Navbar.css";
import company_logo from "../../assets/company_logo.webp";
import { AlignJustify, ShoppingCart, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import useNotification from "../../hooks/useNotification";

const Navbar = () => {
  const { total_item } = useCartContext();
  const [menuClicked, setMenuClicked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const notify = useNotification({ message: "Sign-out successfully ✅"});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signOutAuth = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const authButton = (
    <>
      {isAuthenticated ? (
        <button
          type="button"
          className="user-btn"
          onClick={async () => {
            await signOutAuth();
            notify();
          }}
        >
          Sign out
        </button>
      ) : (
        <NavLink to={"/login"}>
          <button type="button" className="user-btn">
            Log In
          </button>
        </NavLink>
      )}
    </>
  );

  const cartLink = (
    <NavLink to={"/cart"} onClick={() => setMenuClicked(false)}>
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
            <NavLink
              to={`/product-page/${"men's clothing"}`}
              onClick={() => setMenuClicked(false)}
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/product-page/${"women's clothing"}`}
              onClick={() => setMenuClicked(false)}
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/aboutus'}
              onClick={() => setMenuClicked(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/nikestore'}
              onClick={() => setMenuClicked(false)}
            >
              Nike Store
            </NavLink>
          </li>
          <li>{authButton}</li>
          <li className="cart-logo">{cartLink}</li>
        </ul>
      </nav>
      <button
        type="button"
        className="hamburger-menu"
        onClick={handleMenuClick}
      >
        {menuClicked ? <X /> : <AlignJustify />}
      </button>
    </header>
  );
};

export default Navbar;
