import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <img src="https://restfood.onlywebcoding.com.ua/images/about-big.jpg" alt="bar" className="bar-img" />
          
        </div>
        <div className="right-side">
          <h1>
            <span>GOOD FOOD</span> FOR YOUR ALL <br /> DAY <span>GOOD MOOD</span>
          </h1>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit...</p>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit...</p>
          <p>Lorem ipsum, dolor sit amet, consectetur adipisicing elit...</p>
          <div className="features">
            <div className="feature">
               <i className="fas fa-user-tie"></i>
              <p>EXPERIENCED CHEFS</p>
            </div>
            <div className="feature">
              <i className="fas fa-utensils"></i>
              <p>ORIGINAL RECIPES</p>
            </div>
            <div className="feature">
              <i className="fas fa-carrot"></i>
              <p>FRESH INGREDIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
