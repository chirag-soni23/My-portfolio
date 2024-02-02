import React, { useState } from "react";
import "../Stylesheet/Projects.css";

import { project } from "../Components/Constant";
import Nothing from "../Components/Nothing";

const Projects = () => {
  const [projects, setProjects] = useState(project);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-title">My Projects</h1>
        <input
        className="input"
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {filteredProjects.length === 0 ? (
          <p key="no-project" ><Nothing/></p>
        ) : (
          filteredProjects.map((project, index) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
