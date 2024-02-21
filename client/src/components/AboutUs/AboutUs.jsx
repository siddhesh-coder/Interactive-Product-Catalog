import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About QuickMart</h1>
        <p>Welcome to QuickMart, your one-stop destination for all your online shopping needs!</p>
        <p>At QuickMart, we believe in providing our customers with a seamless shopping experience, offering a wide range of products at competitive prices.</p>
        <p>Our mission is to make online shopping convenient, affordable, and enjoyable for everyone.</p>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction: We prioritize the needs and satisfaction of our customers above all else.</li>
          <li>Quality Products: We ensure that all products listed on our platform meet the highest standards of quality.</li>
          <li>Reliability: We strive to be a reliable and trustworthy online shopping destination.</li>
          <li>Innovation: We are committed to continuously improving and innovating our services to better serve our customers.</li>
        </ul>
        <h2>Get in Touch</h2>
        <p>If you have any questions, feedback, or inquiries, feel free to reach out to us:</p>
        <ul>
          <li>Email: support@quickmart.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 QuickMart Street, Pune, India</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
