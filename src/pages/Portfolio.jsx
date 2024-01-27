// Portfolio.js

import React from 'react';
import '../Stylesheet/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A brief description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/300',
      githubLink: 'https://github.com/your-username/project1',
    },
    {
      name: 'Project 2',
      description: 'A brief description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/300',
      githubLink: 'https://github.com/your-username/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-title">My Portfolio</h1>
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img src={project.imageUrl} alt={`Project ${index + 1}`} className="portfolio-image" />
            <div className="portfolio-item-content">
              <h3 className="portfolio-item-title">{project.name}</h3>
              <p className="portfolio-item-description">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
