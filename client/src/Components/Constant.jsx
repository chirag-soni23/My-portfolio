import EcommerceImg from "../assets/ProjectsImage/Ecommerce.png";
import bookingImg from "../assets/ProjectsImage/booking.png";
import foodImg from "../assets/ProjectsImage/food.png";
// my Skills
export const mySkills = [
  {
    name: "HTML",
    percentage: 90,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS",
    percentage: 90,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    percentage: 85,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    percentage: 80,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Express.js",
    percentage: 70,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  },
  {
    name: "Mongo db",
    percentage: 70,
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
];
// my portfolio
export const project = [
  {
    name: "E-commerce Website",
    description:
      "This e-commerce website is built using React and Firebase, incorporating modular UI components, Firebase Realtime Database, Authentication, and Cloud Functions. It features a responsive design and secure payment integration.",
    imageUrl: EcommerceImg,
    githubLink: "https://github.com/chirag-soni23/e-commerce-website",
  },
  {
    name: "Hotel Booking",
    description:
      "This hotel booking platform is developed using the MERN (MongoDB, Express.js, React, Node.js) stack, offering a seamless user experience with real-time data storage, server-side logic, and a dynamic React-based frontend for efficient hotel reservations.",
    imageUrl: bookingImg,
    githubLink: "https://github.com/chirag-soni23/booking-app",
  },
  {
    name: "Food search app",
    description:
      "A React-based food search app that allows users to discover and explore various food items. Utilizing Axios for seamless API integration, the app provides real-time search suggestions, detailed information about each food item, and ensures a responsive design for a smooth user experience.",
    imageUrl: foodImg,
    githubLink: "https://github.com/chirag-soni23/food-search-app",
  },
  // Add more projects as needed
];
