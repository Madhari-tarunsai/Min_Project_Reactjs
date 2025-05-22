import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="form-section">
        <h1>BOOK A TABLE</h1>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="d0dd2439-1320-41a7-9f53-d07cbf68e98a"
          />
          <input type="text" name="first_name" placeholder="Name" required />
          <input type="text" name="last_name" placeholder="Last Name" required />
          <input type="text" name="phone" placeholder="Phone" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <button type="submit">BOOK A TABLE</button>
        </form>
      </div>

      <div className="hours-section">
        <h2>OPENING HOURS</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, inventore hic nulla.</p>
        <div className="days"><span>Monday – Friday</span><span>8AM – 6PM</span></div>
        <div className="days"><span>Saturday</span><span>9AM – 5PM</span></div>
        <div className="days"><span>Sunday</span><span>9AM – 4PM</span></div>
      </div>
    </div>
  );
};

export default Contact;
