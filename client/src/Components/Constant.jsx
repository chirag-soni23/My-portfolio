import EcommerceImg from "../assets/ProjectsImage/Ecommerce.png";
import bookingImg from "../assets/ProjectsImage/booking.png";
import foodImg from "../assets/ProjectsImage/food.png";
import bubbleImg from "../assets/ProjectsImage/bubble.png";
import stopWatchImg from "../assets/ProjectsImage/stopWatch.png";
import drumImg from "../assets/ProjectsImage/drum.png";
import weatherImg from "../assets/ProjectsImage/weather.png";
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
    githubLink: "https://github.com/chirag-soni23/hotel-booking-app",
  },
  {
    name: "Food search app",
    description:
      "A React-based food search app that allows users to discover and explore various food items. Utilizing Axios for seamless API integration, the app provides real-time search suggestions, detailed information about each food item, and ensures a responsive design for a smooth user experience.",
    imageUrl: foodImg,
    githubLink: "https://github.com/chirag-soni23/food-search-app",
  },
  {
    name: "Bubble game",
    description:
      "Embark on a bubble-popping adventure with this JavaScript-powered game. Simple yet captivating, it creates a world of bubbles that await your touch. The ticking timer adds a sense of urgency, making each pop count in this quick and fun challenge.",
    imageUrl: bubbleImg,
    githubLink: "https://github.com/chirag-soni23/Bubble-game",
  },
  {
    name: "Stopwatch",
    description:
      "An interactive stopwatch created using HTML, CSS, and JavaScript, allowing users to start, stop, and reset the timer. The HTML structure provides the layout, CSS styles enhance the visual appearance, and JavaScript handles the functionality, including time tracking and button interactions.",
    imageUrl: stopWatchImg,
    githubLink: "https://github.com/chirag-soni23/StopWatch",
  },
  {
    name: "Drum kit",
    description:
      "Drum kit is a dynamic web application utilizing HTML, CSS, and JavaScript, allowing users to simulate drumming by triggering sounds with keyboard presses. Its intuitive design and responsive layout provide an immersive drumming experience across different devices, offering customizable rhythms and interactive feedback.",
    imageUrl: drumImg,
    githubLink: "https://github.com/chirag-soni23/Drum-kit",
  },
  {
    name: "Weather App",
    description:
      "This weather app utilizes HTML, CSS, and JavaScript to provide users with real-time weather information for a specified city. Users simply need to input the name of the city they want to check and click the search button. Upon clicking, the app fetches the current weather data for the entered city and displays it to the user, offering a seamless and convenient way to stay updated on weather conditions worldwide.",
    imageUrl: weatherImg,
    githubLink: "https://github.com/chirag-soni23/Weather-app",
  },
];
