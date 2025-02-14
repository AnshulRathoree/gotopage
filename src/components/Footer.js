import React from "react";
import "../assets/css/Footer.css";
import GitHubIcon from "../assets/images/github.svg"; 
import LinkedInIcon from "../assets/images/linkedin.svg";
import InstagramIcon from "../assets/images/instagram.svg"

const Footer = () => {
 
  return (
    <footer className="footer">
      <p className="text">© 2025 Anshul's Portfolio</p>
      <div className="social-icons">
        <a
          href="https://github.com/AnshulRathoree" 
          className="icon" 
          aria-label="GitHub"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="GitHub" className="social-icon" />
        </a>

        <a 
          href="https://www.linkedin.com/in/anshul-rathore-082960345/" 
          className="icon" 
          aria-label="LinkedIn"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a 
          href="https://www.instagram.com/i_m__anshulrathore/" 
          className="icon" 
          aria-label="Instagram"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={InstagramIcon} alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
