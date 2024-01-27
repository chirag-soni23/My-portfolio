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
          <span className="logo"><img src="https://www.pikpng.com/pngl/b/501-5014867_portfolio-logo-png-portfolio-png-clipart.png" alt="" /></span>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/portfolio"}>Portfolio</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

