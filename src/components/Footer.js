import React from 'react';
import '../assets/css/Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <p className="text">© 2025 Anshul's Portfolio</p>
      <div className="social-icons">
        <a href="https://github.com/AnshulRathoree" className="icon">GitHub</a>
        <a href="https://www.linkedin.com/in/anshul-rathore-082960345/" className="icon">LinkedIn</a>
        <a href="#" className="icon">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;