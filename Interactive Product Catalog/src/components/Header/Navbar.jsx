import "./Navbar.css";
import company_logo from "../../assets/company_logo.webp";
import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <header className="navbar">
      <Link to={"/"}>
        <img src={company_logo} alt="Company logo" className="logo" />
      </Link>

      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>Products</NavLink>
        </li>

        <li>
          <NavLink>About</NavLink>
        </li>

        {isAuthenticated ? (
          <li>
            <button
              className="user-btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
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

        <li>
          <NavLink>
            <ShoppingCart />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
