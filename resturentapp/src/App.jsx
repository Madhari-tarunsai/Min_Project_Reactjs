import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarr from "./Component/NavBarr/NavBarr";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Gallery from "./Component/Gallery/Gallery";
import Chefs from "./Component/Chefs/Chefs";
import Services from "./Component/Services/Services";
import Contact from "./Component/Contact/Contact";
import NotFound from "./Component/NotFound/NotFound";
import AddFav from "./Component/AddFav/AddFav";
import AddCard from "./Component/AddCard/AddCard";


const App = () => {
  return (
    <div>
      <NavBarr />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} /> 
       <Route path="/addfav" element={<AddFav/>} /> 
       <Route path="/addCard" element={<AddCard/>} /> 
      </Routes>
    </div>
  );
};

export default App;
