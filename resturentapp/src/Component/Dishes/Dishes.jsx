import React from 'react';
import './Dishes.css';

const Dishes = () => {
  return (
    <div className="dishes-container">
      <div>
        <h1>Our <span>Special Dishes....!</span></h1>
        <p>
          Our signature dishes are crafted using fresh ingredients and perfected recipes to deliver an unforgettable taste experience with every bite.
        </p>
      </div>

      <div className="dishes-list" aria-label="Special dishes carousel">
        {/* Repeated twice for infinite scroll effect */}
        <>
          {/* Group 1 */}
          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-4.jpg" alt="Pizza" />
            <p>Pizza</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-2.jpg" alt="Pasta" />
            <p>Pasta</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png" alt="Burger" />
            <p>Burger</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-5.png" alt="Salad" />
            <p>Salad</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-3.jpg" alt="Beef Burger Meal" />
            <p>Beef Burger Meal</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-4.jpg" alt="Double Cheese Pizza" />
            <p>Double Cheese Pizza</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          {/* Group 2 (Repeated for scroll) */}
          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-4.jpg" alt="Pizza" />
            <p>Pizza</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-2.jpg" alt="Pasta" />
            <p>Pasta</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-1.png" alt="Burger" />
            <p>Burger</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-5.png" alt="Salad" />
            <p>Salad</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-3.jpg" alt="Beef Burger Meal" />
            <p>Beef Burger Meal</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>

          <div className="dish-card">
            <img src="https://restfood.onlywebcoding.com.ua/images/special-dishes-4.jpg" alt="Double Cheese Pizza" />
            <p>Double Cheese Pizza</p>
            <div className="dish-info"><p>20rs</p></div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Dishes;
