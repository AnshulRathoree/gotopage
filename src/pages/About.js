import React, { useEffect, useRef } from 'react';
import '../assets/css/About.css';

const About = () => {
  const titleRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsListRef = useRef(null);


  const handleResume = () => {
    window.open('https://anshul-res.tiiny.site/', '_blank'); // Opens in a new tab
  };

  useEffect(() => {
    const animateWords = (elementRef) => {
      
      if (!elementRef.current) return;

      const words = elementRef.current.querySelectorAll('.word');
      words.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.2}s`;
        word.classList.add('fade-in');
      });
    };

    if (titleRef.current) animateWords(titleRef);
    if (aboutSectionRef.current) animateWords(aboutSectionRef);
    if (skillsListRef.current) animateWords(skillsListRef);
  }, []);

  return (
    <div className="about-page">
      <h1 ref={titleRef} className="page-titleAbout">
      <span className="word">Who</span> <span className="word">Am</span> <span className="word">I?</span>
      </h1>

      <section ref={aboutSectionRef} className="about-section">
        <h2 className="section-title">
          <span className="word">Who</span> <span className="word">Am</span> <span className="word">I?</span>
        </h2>
        <p className="section-content">
        <span className="word">I’m</span> <span className="word">ANSHUL</span> <span className="word">from</span>{' '}
        <span className="word">KARNAL,</span> <span className="word">Haryana</span>{' '}

          <span className="word">I’m</span> <span className="word">a</span> <span className="word">front-end</span>{' '}
          <span className="word">developer</span> <span className="word">with</span>{' '}
          <span className="word">expertise</span> <span className="word">in</span>{' '}
          <span className="word">HTML,</span> <span className="word">CSS,</span> <span className="word">Javascript,</span>{' '}
          <span className="word">Figma,</span>
          <span className="word">React,</span> <span className="word">Bootstrap,</span> <span className="word">and</span>{' '}
          <span className="word">modern</span> <span className="word">web</span> <span className="word">technologies.</span>
          <br/>
          <span className="word">I'm Learning </span><span className="word">New technologies</span><span className='word'> Actively.</span>
          <br/>
          
        </p>
      </section>

      <section ref={skillsListRef} className="skills-section">
        <h2 className="section-title">
          <span className="word">My</span><span className='word'>Current</span> <span className="word">Skills</span>
        </h2>
        <ul className="skills-list">
          <li className="word">React.js</li>
          <li className="word">HTML5</li>
          <li className="word">JavaScript (ES6+)</li>
          <li className="word">CSS3</li>
          <li className="word">Figma</li>
          <li className="word">Bootstrap</li>
        </ul>
        <button className='button' onClick={handleResume}>View Resume</button>
      </section>
    </div>
  );
};

export default About;
