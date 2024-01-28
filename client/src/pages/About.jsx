// About.jsx
import React from 'react';
import '../Stylesheet/About.css'; 
import ProfileImage from '../assets/ProfileImage/Chirag.jpg'
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content animated-fade-in">
          <div className="profile-image">
            <img src={ProfileImage}alt="Profile" />
          </div>
          <div className="text-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              Hi, I'm Chirag Soni, a passionate Frontend web developer with a strong
              background in creating dynamic and responsive websites. I enjoy
              turning complex problems into simple, beautiful, and intuitive
              solutions. My goal is to contribute to the world of web
              development by creating meaningful and impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
