import React, { useState } from "react";
import "../Stylesheet/Home.css";
import { mySkills } from "../Components/Constant";
import { project } from "../Components/Constant";
import ResumePDF from "../resume/Resume.pdf"; 

const Home = () => {
  const [skills, setSkills] = useState(mySkills);
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF; 
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <div className="home-content animated-fade-in">
            <h1 className="home-title">Welcome to My Portfolio</h1>
            <p className="home-description">
              I am a passionate Frontend developer dedicated to creating
              innovative and user-friendly websites.
            </p>
            <button onClick={handleDownloadResume} className="download-btn">
              Get Resume
            </button>
          </div>
        </div>
      </section>
      <div className="additional-content">
        <h2>My Skills </h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skills-bar" key={index}>
              <div className="skills-bar-label">
                {skill.name} <img src={skill.logo} alt="" />{" "}
              </div>

              <div className="skills-bar-progress">
                <div
                  className="skills-bar-fill"
                  style={{ width: `${skill.percentage}%` }}
                >
                  {skill.percentage} %
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="additional-content">
        <h2>Projects</h2>
        {project.map((project, index) => {
          return (
            <div key={index} className="project">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
