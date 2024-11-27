import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedProducts.css'; // Create this file for custom styling


import boat203 from "../../../assets/boat203-1.png";
import jbl from "../../../assets/jbl-endu-1.png";
import boat255r from "../../../assets/boat255r-1.png";
import jbl760nc from "../../../assets/jbl760nc-1.png";
import boat518 from "../../../assets/boat518-1.png";





const products = [
  {
    name: "boat203-1",
    description: "Keep the Noise Out, or In. You Choose.",
    originalPrice: 9999,
    offerPrice: 14999,
    image: boat203
  },
  {
    name: "jbl-endu-1",
    description: "Featherweight For Comfort All-Day",
    originalPrice: 1099,
    offerPrice: 2990,
    image: jbl
  },
  {
    name: "boat255r-1",
    description: "Give Your Favourite Music A Boost.",
    originalPrice: 13489,
    offerPrice: 19990,
    image: boat255r
  },
  {
    name: "jbl760nc-1",
    description: "Keep the Noise Out, or In. You Choose.",
    originalPrice: 9999,
    offerPrice: 14999,
    image: jbl760nc
  },
  {
    name: "boat518-1",
    description: "Featherweight For Comfort All-Day",
    originalPrice: 1099,
    offerPrice: 2990,
    image: boat518
  },
 
];
const ProductSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  
    return (
      <div className="product-slider">
         <h2>Featured Products </h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">
                    <span className="offer-price">${product.offerPrice.toFixed(2)}</span>
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default ProductSlider;
  