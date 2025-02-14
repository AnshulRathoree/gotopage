import React from "react";
import "../assets/css/ProjectCard.css";

const ProjectCard = ({ title, description, image, link, repo }) => {
  return (
    <div className="project-card">

    <div className="project-overlay">
      <span>Hover to know more</span>
    </div>
    
    <div className="card-content">
      <img src={image} alt={title} className="project-image" />
      <div className="overlay">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="buttons">
          <a href={link} className="project-link">View</a>
          <a href={repo} className="project-link repo">Code</a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectCard;
