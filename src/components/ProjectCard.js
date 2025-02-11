import React from 'react';
import '../assets/css/ProjectCard.css';

const ProjectCard = ({ title, description, image, link, repo }) => {
  return (
    <div className="project-card futuristic-hover">
      <div className="card-content">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()} 
          >
            View Project
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()} 
          >
            Repository
          </a>
        </div>
        <div className="glowing-border"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
