import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import '../assets/css/Home.css';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  
    const navigate= useNavigate();
    
    const handleNavigateToProjects = () => {
      navigate('/projects'); 
    };
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector('.skills-section');
      const aboutSection = document.querySelector('.about-me');

      if (!skillsSection || !aboutSection) return;

      const skillsSectionBottom = skillsSection.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      const fadeStart = viewportHeight * 0.6; 
      const fadeDistance = 200; 

      if (skillsSectionBottom <= fadeStart) {
        const opacity = Math.max(0, (skillsSectionBottom - fadeStart) / fadeDistance);
        skillsSection.style.opacity = opacity;
      } else {
        skillsSection.style.opacity = 1;
      }

      if (skillsSectionBottom <= viewportHeight) {
        aboutSection.classList.add('visible');
      } else {
        aboutSection.classList.remove('visible');
      }
    };

    const handleParallaxScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };

  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleParallaxScroll);

    gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.2 });
    gsap.fromTo('.skill-card', { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, stagger: 0.2, duration: 1.2, delay: 1.5 });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallaxScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <HeroSection />

      <section className="skills-section">
        <h2 className="section-title">My Expertise</h2>
        <div className="skills-cards">
          <div className="skill-card">
            <h3>React.js</h3>
            <p>Building dynamic and performant user interfaces</p>
          </div>
          <div className="skill-card">
            <h3>Figma</h3>
            <p>Designing UI/UX</p>
          </div>
          <div className="skill-card">
            <h3>Bootstrap</h3>
            <p>Innovative and sleek user experiences</p>
          </div>
          <div className="skill-card">
            <h3>CSS</h3>
            <p>Creating Seamless Animations</p>
          </div>
        </div>
      </section>

      <section className="about-me">
        <div className="about-me-card">
          <h2>About Me</h2>
          <p>
            Passionate web developer with expertise in building innovative and
            user-friendly digital experiences, having hands on experiences in technologies like Html, CSS, Bootstrap, React.js, Javascript, Figma and AI Tolls like Chatgpt.
          </p>
          <button onClick={handleNavigateToProjects} className="button">Explore Projects</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
