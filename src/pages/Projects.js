import React, { useEffect, useState, useRef } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import '../assets/css/Projects.css';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const videoRefs = useRef([]);
  const playingVideoIndex = useRef(null);

  useEffect(() => {
    setProjects(projectsData);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isMobile) {
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
  }, [isMobile]);

  const handleVideoClick = (index) => {
    if (isMobile) {
      if (playingVideoIndex.current !== null && playingVideoIndex.current !== index) {
        videoRefs.current[playingVideoIndex.current].pause();
        videoRefs.current[playingVideoIndex.current].parentElement.classList.remove('playing');
      }

      const video = videoRefs.current[index];
      if (video.paused) {
        video.play().catch((err) => console.warn("Playback error: ", err));
        video.parentElement.classList.add('playing');
        playingVideoIndex.current = index;
      } else {
        video.pause();
        video.parentElement.classList.remove('playing');
        playingVideoIndex.current = null;
      }
    }
  };

  const handleOutsideClick = (event, index) => {
    if (isMobile && playingVideoIndex.current === index) {
      const videoContainer = event.currentTarget;
      if (!videoContainer.contains(event.target)) {
        videoRefs.current[index].pause();
        videoContainer.classList.remove('playing');
        playingVideoIndex.current = null;
      }
    }
  };

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
        <div
          className="video-section"
          key={index}
          onClick={(event) => handleOutsideClick(event, index)}
        >
      
          {isMobile && (
            <div
              className="tap-to-play-overlay"
              onClick={() => handleVideoClick(index)}
            >
              Tap to Play
            </div>
          )}
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