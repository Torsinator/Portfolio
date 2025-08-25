import React from "react";
import "../css/ProjectDetail.css";

const ProjectDetail = ({ title, description, image }) => {
  return (
    <div className="project-detail-container">
      <div className="project-detail-image-wrapper">
        <img src={image} alt={title + " project image"} className="project-detail-image" />
      </div>
      <div className="project-detail-content">
        <h1 className="project-detail-title">{title}</h1>
        <p className="project-detail-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
