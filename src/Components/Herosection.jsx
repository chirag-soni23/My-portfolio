import React from 'react';
import '../Stylesheet/Herosection.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Chirag Soni</h1>
          <p className="hero-description">Frontend Developer</p>
          <button className="hero-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
