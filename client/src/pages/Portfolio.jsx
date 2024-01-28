import React from "react";
import "../Stylesheet/Portfolio.css";
import EcommerceImg from "../assets/ProjectsImage/Ecommerce.png";
import bookingImg from "../assets/ProjectsImage/booking.png";
import foodImg from '../assets/ProjectsImage/food.png'

const Portfolio = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "This e-commerce website is built using React and Firebase, incorporating modular UI components, Firebase Realtime Database, Authentication, and Cloud Functions. It features a responsive design and secure payment integration.",
      imageUrl:EcommerceImg,
      githubLink: "https://github.com/chirag-soni23/e-commerce-website",
    },
    {
      name: "Project 2",
      description:
        "This hotel booking platform is developed using the MERN (MongoDB, Express.js, React, Node.js) stack, offering a seamless user experience with real-time data storage, server-side logic, and a dynamic React-based frontend for efficient hotel reservations.",
      imageUrl: bookingImg,
      githubLink: "https://github.com/chirag-soni23/booking-app",
    },
    {
      name: "Project 3",
      description:
        "A React-based food search app that allows users to discover and explore various food items. Utilizing Axios for seamless API integration, the app provides real-time search suggestions, detailed information about each food item, and ensures a responsive design for a smooth user experience.",
      imageUrl: foodImg,
      githubLink: "https://github.com/chirag-soni23/food-search-app",
    },
    // Add more projects as needed
  ];

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
