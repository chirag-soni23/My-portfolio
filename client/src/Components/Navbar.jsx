import React, { useState } from "react";
import "../Stylesheet/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to={"/"} className="logo">
            <img
              src={logo}
              alt="code&craft"
            />
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link onClick={toggleNavbar} to={"/"}>
            Home
          </Link>
          <Link onClick={toggleNavbar} to={"/about"}>
            About
          </Link>
          <Link onClick={toggleNavbar} to={"/projects"}>
            Projects
          </Link>
          <Link onClick={toggleNavbar} to={"/contact"}>
            Contact
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? (
            <i className="fa-solid fa-xmark" style={{ color: "white" }}></i>
          ) : (
            <div className="menu-icon">
              <i className="fa-solid fa-bars" style={{ color: "white" }}></i>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
