import React, { useEffect, useRef } from "react";
import "../assets/css/About.css";

const About = () => {
  const titleRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsListRef = useRef(null);

  const handleResume = () => {
    window.open("https://anshul-res.tiiny.site/", "_blank");
  };

  useEffect(() => {
    const animateWords = (elementRef) => {
      if (!elementRef.current) return;
      const words = elementRef.current.querySelectorAll(".word");
      words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.2}s`;
        word.classList.add("fade-in");
      });
    };

    if (titleRef.current) animateWords(titleRef);
    if (aboutSectionRef.current) animateWords(aboutSectionRef);
    if (skillsListRef.current) animateWords(skillsListRef);
  }, []);

  return (
    <div className="about-page">
      <h1 ref={titleRef} className="page-titleAbout">
        <span className="word">About</span> <span className="word">Me</span>
      </h1>

      <section ref={aboutSectionRef} className="about-section">
        <div className="about-content">
          <h2 className="section-title">
            <span className="word">Who</span> <span className="word">Am</span> <span className="word">I?</span>
          </h2>
          <p className="section-description">
          I’m <strong>ANSHUL</strong>, a passionate Front-end Developer based in <strong>Karnal, Haryana</strong>.
          I specialize in modern web technologies like <strong>React.js, JavaScript, CSS,</strong> and <strong>Figma</strong>.
          I always eager to learn and push my boundaries to create unique web experiences.
          </p>
        </div>
      </section>

      <section ref={skillsListRef} className="skills-section">
        <h2 className="section-title">
          <span className="word">Skills</span>
        </h2>
        <ul className="skills-list">
          <li className="word">React.js</li>
          <li className="word">HTML5</li>
          <li className="word">JavaScript (ES6+)</li>
          <li className="word">CSS3</li>
          <li className="word">Figma</li>
          <li className="word">Bootstrap</li>
        </ul>
        <button className="button" onClick={handleResume}>
          View Resume
        </button>
      </section>
    </div>
  );
};

export default About;
