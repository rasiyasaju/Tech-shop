import React from 'react';
import { FaTruck, FaShieldAlt, FaTag, FaCreditCard } from 'react-icons/fa';
import './OurAdvantages.css';

const Advantages= () => {
  return (
    <footer className="foot">
        <h3>Our Advantages</h3>
      <div className="footer-col">
        <FaTruck className="icon" />
        <h4>Express Delivery</h4>
        <p>ships in 24 hrs</p>
      </div>
      <div className="footer-col">
        <FaShieldAlt className="icon" />
        <h4>Brand Warranty</h4>
        <p>Original products</p>
      </div>
      <div className="footer-col">
        <FaTag className="icon" />
        <h4>Exciting Deals</h4>
        <p>On all prepaid orders</p>
      </div>
      <div className="footer-col">
        <FaCreditCard className="icon" />
        <h4> Secure Payments</h4>
        <p>SSL/secure certificates</p>
      </div>
    </footer>
  );
};

export default Advantages;
