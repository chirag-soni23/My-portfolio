import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Stylesheet/Home.css";
import { mySkills, project } from "../Components/Constant";
// import ResumePDF from "../resume/Resume.pdf";
import ResumePDF from "../resume/r.pdf";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [skills, setSkills] = useState(mySkills);
  const skillsContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const skillsBars = document.querySelectorAll(".skills-bar");

    skillsBars.forEach((bar) => {
      gsap.fromTo(
        bar,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate the title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: -300,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 20%",
            end: "bottom 60%",
            // markers:true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    // link.download = "Resume.pdf";
    link.download = "r.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section className="home-section">
        <div className="home-container">
          <div className="home-content animated-fade-in">
            <h1 className="home-title" ref={titleRef}>
              Welcome to My Portfolio
            </h1>
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
        <h2>My Skills</h2>
        <div className="skills-container" ref={skillsContainerRef}>
          {skills.map((skill, index) => (
            <div className="skills-bar" key={index}>
              <div className="skills-bar-label">
                {skill.name} <img src={skill.logo} alt="" />
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
