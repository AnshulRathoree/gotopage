import React, { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import "../assets/css/Home.css";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".hero",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );

    gsap.fromTo(
      ".skills-section",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.3 }
    );

    gsap.fromTo(
      ".about-me",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="home-page">
      <section ref={heroRef} className="heroclass">
        <HeroSection />
      </section>

      <section ref={skillsRef} className="skills-section">
        <h2 className="section-title">My Expertise</h2>
        <div className="skills-cards">
          <div className="skill-card">
            <h3>React.js</h3>
            <p>Building dynamic user interfaces.</p>
          </div>
          <div className="skill-card">
            <h3>Figma</h3>
            <p>Crafting UI/UX designs.</p>
          </div>
          <div className="skill-card">
            <h3>Bootstrap</h3>
            <p>Designing responsive layouts.</p>
          </div>
          <div className="skill-card">
            <h3>HTML5</h3>
            <p>To Build Modern Structure of Websites.</p>
          </div>
          <div className="skill-card">
            <h3>CSS3</h3>
            <p>Creating seamless animations.</p>
          </div>
          <div className="skill-card">
            <h3>Javascript</h3>
            <p>Building interactive Pages.</p>
          </div>
          
        </div>
      </section>

      <section ref={aboutRef} className="about-me">
        <div className="about-me-card">
          <h2>About Me</h2>
          <p>
            Passionate web developer with experience in building interactive and
            visually appealing websites using React.js, JavaScript, CSS, and Figma.
          </p>
          <button onClick={() => navigate("/projects")} className="button">
            Explore Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
