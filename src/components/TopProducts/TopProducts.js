import React, { useState } from 'react';
import products from './FilterData.js'; // Make sure to import your product data here
import { useParams } from 'react-router-dom';
import './TopProducts.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="App">
      <h2>Top Products</h2>
      <div className="filter-buttons">
        {['All', 'Headphones', 'Earbuds', 'Earphones', 'Neckbands'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-container">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <p className="product-info">{product.info}</p>
            <p className="product-price">
              ₹{product.finalPrice} <span className="original-price">₹{product.originalPrice}</span>
            </p>
            <p className="product-rating"> {'⭐'.repeat(product.rateCount)}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
