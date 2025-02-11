import React, { useEffect, useRef } from 'react';
import '../assets/css/HeroSection.css';

import { useNavigate } from 'react-router-dom';
const HeroSection = () => {

const navigate= useNavigate();

const handleNavigateToProjects = () => {
  navigate('/projects'); 
};


  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero');
      const aboutSection = document.querySelector('.about-me');
      const skillsSection = document.querySelector('.skills-section');

      if (!heroSection || !aboutSection || !skillsSection) return;

      if (window.scrollY > 50) {
        heroSection.classList.add('fade-out');
      } else {
        heroSection.classList.remove('fade-out');
      }

     
      const skillsBottom = skillsSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (skillsBottom <= viewportHeight) {
        aboutSection.classList.add('visible');
      } else {
        aboutSection.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateWords = (element) => {
      if (!element) return;
      const words = element.querySelectorAll('.word');
      words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.3}s`;
        word.classList.add('fade-in');
      });
    };

    animateWords(titleRef.current);
    setTimeout(() => {
      animateWords(subtitleRef.current);
    }, 2000);
  }, []);

  return (
    <section className="hero">
      <div className="content">
 
        <h1 ref={titleRef} className="title">
          <span className="word">Welcome </span>
          <span className="word">to </span>
          <span className="word">My </span>
          <span className="word">Portfolio </span>
        </h1>

       
        <p ref={subtitleRef} className="subtitle">
          <span className="word">I</span>
          <span className="word">build</span>
          <span className="word">cutting-edge</span>
          <span className="word">web</span>
          <span className="word">experiences.</span>
        </p>

      
        <button className="button" onClick={handleNavigateToProjects}>View Projects</button>
      </div>
    </section>
  );
};

export default HeroSection;
