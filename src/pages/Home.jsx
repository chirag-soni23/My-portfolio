// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/Home.css'; // Import your Home page specific styles

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <div className="home-content animated-fade-in">
            <h1 className="home-title">Welcome to My Portfolio</h1>
            <p className="home-description">
              I am a passionate web developer dedicated to creating innovative
              and user-friendly websites.
            </p>
            <Link to="/resume" className="download-btn">
              Download Resume
            </Link>
          </div>
        </div>
        <div className="light-effect"></div>
      </section>

      <section className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Featured Projects</h2>
          <div className="project-card">
            <h3 className="project-name">Project 1</h3>
            <p className="project-description">
              A description of your first project goes here.
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-name">Project 2</h3>
            <p className="project-description">
              A description of your second project goes here.
            </p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
