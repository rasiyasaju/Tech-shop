
import React from 'react';
import './Footer.css';
import { footMenu, footSocial } from './FooterData.js';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1:  */}
        <div className="footer-column">
          <h2 className="footer-website-name">TechShop</h2>
          <p className="footer-description">
            Subscribe to our Email alerts to receive early discount offers.
            and new product info.
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Email Address*" className="footer-email" />
            <button className="footer-subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* Column 2: Help Section */}
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            {footMenu[0].menu.map((item) => (
              <li key={item.id}><a href={item.path}>{item.link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Policies Section */}
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            {footMenu[1].menu.map((item) => (
              <li key={item.id}><a href={item.path}>{item.link}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Company Section */}
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            {footMenu[2].menu.map((item) => (
              <li key={item.id}><a href={item.path}>{item.link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.Rasiya Saju</p>
        <div className="footer-social">
          {footSocial.map((social) => (
            <a href={social.path} className="social-icon" key={social.id}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
