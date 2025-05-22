import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>Hey coder, the page you're looking for doesn't exist.</p>
      <img 
        src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147746234.jpg?semt=ais_hybrid&w=740" 
        alt="404 Error Illustration" 
      />
    </div>
  );
};

export default NotFound;
