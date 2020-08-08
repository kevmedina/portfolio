import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">Projects</h1>

      <section className="projects">
        <div className="project">
          <img src="../../images/brickbreaker.png" alt="brick breaker" />
        </div>
        <div className="project">
          <img src="../../images/ironbook.png" alt="Ironbook" />
        </div>
        <div className="project">
          <img src="../../images/dishitout.png" alt="Dish-It-Out" />
        </div>
        <div className="project">
          <img src="../../images/dishitout.png" alt="Dish-It-Out" />
        </div>
      </section>
    </div>
  );
};

export default Projects;
