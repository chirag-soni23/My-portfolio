import React, { useState } from 'react';
import '../Stylesheet/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={'/'} className="logo"><img src="https://www.pikpng.com/pngl/b/501-5014867_portfolio-logo-png-portfolio-png-clipart.png" alt="" /></Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen? <i className="fa-solid fa-xmark" style={{color:'white'}}></i>:  <div className='menu-icon'>
          <i className="fa-solid fa-bars" style={{color:"white"}}></i>
          </div>}
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
