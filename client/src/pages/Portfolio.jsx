import React, { useState } from "react";
import "../Stylesheet/Portfolio.css";

import { project } from "../Components/Constant";

const Portfolio = () => {
  const [projects,setProjects] = useState(project)
  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-title">My Portfolio</h1>
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img
              src={project.imageUrl}
              alt={`Project ${index + 1}`}
              className="portfolio-image"
            />
            <div className="portfolio-item-content">
              <h3 className="portfolio-item-title">{project.name}</h3>
              <p className="portfolio-item-description">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
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
