import React from "react";
import { useParams } from "react-router-dom";
import {Alert, Button} from 'react-bootstrap'
import './Recipe.css'

const MenuDetails = ({ MenuData }) => {
  const { id } = useParams();
  console.log("ID from URL:", id);
  //  console.log("MenuData:", MenuData);

  const matchedData = MenuData.find((y) => y.id === Number(id));
  console.log("Matched Data:", matchedData);

  if (!matchedData) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Item not found</h2>;
  }
   let cartItems=JSON.parse(localStorage.getItem("carditems"))||[]
  const handlerCrd=(card)=>{
    console.log(card);
    
   
  console.log(cartItems);
  
      cartItems.push(card)
      
    localStorage.setItem("carditems",JSON.stringify(cartItems))
    alert(`${card.name} is added to the cart`);


  }
  const handlerFav=(favitem)=>{
    const favItems=JSON.parse(localStorage.getItem("favItems")) || []
    favItems.push(favitem)
    localStorage.setItem("favItems",JSON.stringify(favItems))

  }

  return (
  <div id='singleitemdetail'>
    <div id='img'>
      <img src={matchedData.image} alt="img" />
    </div>

    {/* Group text and buttons */}
    <div className="content-area">
      <h1>Name: {matchedData.name}</h1>
      <p>ID: {matchedData.id}</p>
      <p>Cuisine: {matchedData.cuisine}</p>
      <p>Difficulty: {matchedData.difficulty}</p>
      <p>Ingredients: {matchedData.ingredients}</p>
      <p>Instructions: {matchedData.instructions}</p>
      <p>Rating: {matchedData.rating}</p>

      <div id='btn'>
        <Button variant="warning" onClick={()=>{handlerCrd(matchedData)}}>AddCard</Button>
        <Button variant="danger" onClick={()=>{handlerFav(matchedData)}}>AddFav</Button>
      </div>
    </div>
  </div>
);

};

export default MenuDetails;
