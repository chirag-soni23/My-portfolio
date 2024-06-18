import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../Stylesheet/Footer.css";

const Footer = ({ path }) => {
  const isContactPage = path === "/contact";

  return (
    <footer className={`footer ${isContactPage ? "fixed-bottom" : ""}`}>
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://github.com/chirag-soni23"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/ChiragSoni23"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/chirag-soni-518828269/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; <b>Email:-</b> csoni0693@gmail.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
