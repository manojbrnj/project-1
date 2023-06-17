import React from 'react';

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="btn-shop-now">Shop Now</button>
          <button className="btn-category">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="feature-icons">
            <img src="../../public/images/flipkart.png" alt="flipkart-logo" />
            <img src="../../public/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="../../public/images/shoe_image.png" alt="shoe-img" />
      </div>
    </div>
  );
}
