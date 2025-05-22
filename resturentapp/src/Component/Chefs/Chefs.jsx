import React from 'react';
import './Chefs.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Chefs = () => {
  return (
    <section className="chefs-section">
      <div className="chefs-header">
        <h1>Our Best Chefs</h1>
        <p>
          The best chefs dedicate themselves to creating delicious meals with care and expertise,
          making every dining experience enjoyable and memorable.
        </p>
      </div>

      <div className="chefs-container">
        <div className="chef-card">
          <img
            src="https://restfood.onlywebcoding.com.ua/images/chef-1.jpg"
            alt="Richard Nauz"
            className="chef-img"
          />
          <h2>Richard Nauz</h2>
          <p>Food Chef</p>
          <div className="chef-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="chef-card">
          <img
            src="https://restfood.onlywebcoding.com.ua/images/chef-2.jpg"
            alt="Jessica Brown"
            className="chef-img"
          />
          <h2>Jessica Brown</h2>
          <p>Pastry Chef</p>
          <div className="chef-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="chef-card">
          <img
            src="https://restfood.onlywebcoding.com.ua/images/chef-3.jpg"
            alt="Michael Lee"
            className="chef-img"
          />
          <h2>Michael Lee</h2>
          <p>Grill Chef</p>
          <div className="chef-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="chef-card">
          <img
            src="https://restfood.onlywebcoding.com.ua/images/chef-4.jpg"
            alt="Sophia Green"
            className="chef-img"
          />
          <h2>Sophia Green</h2>
          <p>Sous Chef</p>
          <div className="chef-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chefs;
