import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">Projects</h1>

      <section className="projects">
        <div className="project">
          <a href="https://kevmedina.github.io/ironhack-project-1/">
            <img src="../../images/brickbreaker.png" alt="brick breaker" />
          </a>
        </div>
        <div className="project">
          <a href="https://ironbook.herokuapp.com/">
            <img src="../../images/ironbook.png" alt="Ironbook" />
          </a>
        </div>
        <div className="project">
          <a href="https://dish-it-out.netlify.app">
            <img src="../../images/dishitout.png" alt="Dish-It-Out" />
          </a>
        </div>
        <div className="project">
          <a href="https://dish-it-out.netlify.app">
            <img src="../../images/dishitout.png" alt="Dish-It-Out" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
