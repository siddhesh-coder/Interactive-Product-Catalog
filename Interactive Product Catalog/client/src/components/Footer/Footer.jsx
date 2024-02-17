/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import pay from "../../assets/pay.webp";
import appStore from "../../assets/app.webp";
import playStore from "../../assets/play.webp";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
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

  return (
    <footer className="section-p1">
      <div className="col">
        <Link to={'/'}>
          <webn className="logo">QuickMart</webn>
        </Link>
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong> Pune, Maharashtra.
        </p>
        <p>
          <strong>Phone: </strong> +918600902741
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <Facebook />
            <Twitter />
            <Instagram />
            <Youtube />
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <Link to={"#"}>About Us</Link>
        <Link to={"#"}>Delivery Information</Link>
        <Link to={"#"}>Privacy Policy</Link>
        <Link to={"#"}>Terms & Conditions</Link>
        <Link to={"#"}>Contact Us</Link>
      </div>

      <div className="col">
        <h4>My Account</h4>
        {isAuthenticated ? (
          <Link
            onClick={() => {
              logout({ logoutParams: { returnTo: window.location.origin } });
              notify();
            }}
          >
            Log Out
          </Link>
        ) : (
          <Link onClick={() => loginWithRedirect()}>Log In</Link>
        )}
        <Link to={'/cart'}>View Cart</Link>
        <Link to={"#"}>Track My Order</Link>
        <Link to={"#"}>Help</Link>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
          <img src={appStore} alt="App Store" />
          <img src={playStore} alt="Play Store" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="Payment gateways" />
      </div>

      <div className="copyright">
        <p>&#169; {new Date().getFullYear()}. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
