import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './AddCard.css';

const AddCard = () => {
  const [card1, setCard] = useState([]);

  useEffect(() => {
    let abc = JSON.parse(localStorage.getItem("carditems")) || [];
    setCard(abc);
  }, []);

  return (
    <div className="add-card-container">
      <h2 className="table-heading">Your Cart Items</h2>
      <div className="responsive-table">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Dish</th>
              <th>Dish Image</th>
              <th>Dish Rating</th>
            </tr>
          </thead>
          <tbody>
            {card1.map((z, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{z.name}</td>
                <td><img src={z.image} width="90" alt={z.name} className="dish-image" /></td>
                <td>{z.rating}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AddCard;
