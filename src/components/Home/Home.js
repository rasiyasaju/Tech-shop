import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

// Import images
import jbl660nc from "../../../assets/jbl660nc-1.png";
import boat131 from "../../../assets/boat131-3.png";
import sonyXb910n from "../../../assets/sonyXb910n-1.png";

const HomePageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>, // Custom class for dots
  };

  const slides = [
    {
      name: "JBL Live 660NC",
      description: "Keep the Noise Out, or In. You Choose.",
      originalPrice: "₹9,999",
      offerPrice: "₹14,999",
      image: jbl660nc,
    },
    {
      name: "boAt Airdopes131",
      description: "Featherweight For Comfort All-Day",
      originalPrice: "₹1,099",
      offerPrice: "₹2,990",
      image: boat131,
    },
    {
      name: "Sony WH-XB910N",
      description: "Give Your Favourite Music A Boost.",
      originalPrice: "₹13,489",
      offerPrice: "₹19,990",
      image: sonyXb910n,
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <div className="content">
            <div className="product-details">
              <h2>{slide.name}</h2>
              <p>{slide.description}</p>
              <p className="price">Original Price: {slide.originalPrice}</p>
              <p className="price">Offer Price: {slide.offerPrice}</p>
              <button className="shop-now-button">Shop Now</button>
            </div>
            <div className="product-image">
              <img src={slide.image} alt={slide.name} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomePageSlider;
