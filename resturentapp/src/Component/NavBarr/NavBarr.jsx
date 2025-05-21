import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBarr.css'; 
import { LuChefHat } from "react-icons/lu";

const NavBarr = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark custom-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-title" style={{color:'white'}}>
          BestFood <LuChefHat />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
  <div className="d-flex justify-content-between w-100 align-items-center">
    <div className="nav-center mx-auto">
      <Nav className="nav-links justify-content-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/chefs" className="nav-link">Chefs</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </Nav>
    </div>
    <div className="action-buttons d-flex gap-3">
      <Link to='addfav'><span className="btn btn-outline-primary" style={{color:'white'}}>AddFav</span></Link>
      <Link to='addcard'><span className="btn btn-outline-success" style={{color:'white'}}>AddCard</span></Link>
    </div>
  </div>
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBarr;
