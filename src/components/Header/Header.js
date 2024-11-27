// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">TechShop</div>
      <div className="header__icons">
        <Link to="/search" className="icon">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <Link to="/user" className="icon">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/cart" className="icon">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
