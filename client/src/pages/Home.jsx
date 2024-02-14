import React, { useState } from "react";
import swal from "sweetalert";
import "../Stylesheet/Home.css";
import { mySkills } from "../Components/Constant";
import { project } from "../Components/Constant";

const Home = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [skills, setSkills] = useState(mySkills);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  const handleDownloadResume = () => {
    if (resumeFile) {
      const fileUrl = URL.createObjectURL(resumeFile);
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      swal("Oops!", "Please select a file before downloading.", "error");
    }
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

            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
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
        {project.map((project,index)=>{
          return  <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>
           {project.description}
          </p>
        </div>
        })}
      </div>
    </div>
  );
};

export default Home;
