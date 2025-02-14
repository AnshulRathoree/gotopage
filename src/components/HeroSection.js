import React, { useEffect, useRef } from "react";
import "../assets/css/HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const handleNavigateToProjects = () => {
    navigate("/projects");
  };

  useEffect(() => {
    const animateWords = (element) => {
      if (!element) return;
      const words = element.querySelectorAll(".word");
      words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.25}s`;
        word.classList.add("fade-in");
      });
    };

    animateWords(titleRef.current);
    setTimeout(() => {
      animateWords(subtitleRef.current);
    }, 1200);
  }, []);

  return (
    <section className="hero">
      <div className="content">
        <h1 ref={titleRef} className="title">
          <span className="word">Welcome</span>
          <span className="word">to</span>
          <span className="word">My</span>
          <span className="word">Portfolio</span>
        </h1>

        <p ref={subtitleRef} className="subtitle">
          <span className="word">I</span>
          <span className="word">build</span>
          <span className="word">cutting-edge</span>
          <span className="word">web</span>
          <span className="word">experiences.</span>
        </p>

        <button className="button" onClick={handleNavigateToProjects}>
          View Projects
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
