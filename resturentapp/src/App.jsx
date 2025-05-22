import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import NavBarr from "./Component/NavBarr/NavBarr";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Gallery from "./Component/Gallery/Gallery";
import Chefs from "./Component/Chefs/Chefs";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound/NotFound";
import AddFav from "./Component/AddFav/AddFav";
import AddCard from "./Component/AddCard/AddCard";
import Dishes from "./Component/Dishes/Dishes";
import Menu from "./Component/Menu/Menu";
import MenuDetails from "./Component/Menu/MenuDetails";
import axios from "axios";


const App = () => {
  const [Recipes,setRecipes]=useState([])
  
      useEffect(()=>{
          axios.get('https://dummyjson.com/recipes').then(res=>{
              console.log(res.data.recipes)
              setRecipes(res.data.recipes)
          })
  
      },[])
  return (
    <div>
      <NavBarr />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/dish" element={<Dishes/>} />
        <Route path="/menu" element={<Menu data={Recipes}/>} />
        <Route path="/menu/:id" element={<MenuDetails MenuData={Recipes}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} /> 
       <Route path="/addfav" element={<AddFav/>} /> 
       <Route path="/addCard" element={<AddCard/>} /> 
      </Routes>
    </div>
  );
};

export default App;
