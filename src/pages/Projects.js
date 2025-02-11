import React, { useEffect, useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import '../assets/css/Projects.css';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setProjects(projectsData);

    const observerOptions = {
      root: null,
      threshold: 0.6, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch((err) => console.warn("Playback error: ", err));
        } else {
          entry.target.pause();
        }
      });
    }, observerOptions);

   
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div className="projects-page">
      <h1 className="page-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            repo={project.repolink}
          />
        ))}
      </div>

  
      {[video1, video2, video3, video4].map((videoSrc, index) => (
        <div className="video-section" key={index}>
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="scroll-video"
            muted
            loop
            playsInline
            src={videoSrc}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
