import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio-Anshul</div>

 
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="link" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" className="link" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/projects" className="link" onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="link" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
        {/* <li>
          <Link to="/blog" className="link" onClick={() => setIsOpen(false)}>Blog</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
