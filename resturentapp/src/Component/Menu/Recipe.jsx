import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import Menu from './Menu';

const Recipe = ({ singleItem }) => {
    const navigate=useNavigate()
  return (
    <Card className="recipe-card animate-fade-in">
      <Card.Img variant="top" src={singleItem.image} alt={singleItem.name} />
      <Card.Body>
        <Card.Title>{singleItem.name}</Card.Title>
        <Card.Text>
          Cuisine: {singleItem.cuisine}<br />
          Meal Type: {singleItem.mealType}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/Menu/${singleItem.id}`)}}>View Detail</Button>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
