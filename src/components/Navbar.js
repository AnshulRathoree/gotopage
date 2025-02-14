import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

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

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <li key={index}>
            <Link to={`/${item.toLowerCase()}`} className="link" onClick={() => setIsOpen(false)}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
  