import React from "react";
import './Footer.css';
import pay  from '../../assets/pay.webp';
import appStore from '../../assets/app.webp';
import playStore from '../../assets/play.webp';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="section-p1">
        <div className="col">
            <a><webn className="logo">QuickMart</webn></a>
            <h4>Contact</h4>
            <p><strong>Address:</strong>Pune, Maharashtra.</p>
            <p><strong>Phone:</strong>+918600902741</p>
            <p><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
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
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div className="col install">
             <h4>Install App</h4>
             <p>From App Store or Google Play</p>
             <div className="row">
                <img src={appStore}alt="App Store" />
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
