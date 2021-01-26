import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">Projects</h1>

      <section className="projects">
        {/* Brick Breaker Project */}
        <div className="project">
          <img src="../../images/brickbreaker.png" alt="brick breaker" />

          <div className="project-info">
            <h3>Brick Breaker</h3>
            <p>
              A single player game in which the player must smash a wall of
              bricks by deflecting a bouncing ball with a paddle. The player
              gets three lives to start with, a life is lost if the ball hits
              the bottom of the screen and the player advances to a new level
              once all the bricks have been destroyed.
            </p>
            <p>Technologies: JavaScript, HTML, CSS, Canvas</p>
            <a href="https://kevmedina.github.io/ironhack-project-1/">
              <button>VIEW WEBSITE</button>
            </a>
          </div>
        </div>

        {/* Ironbook Project */}
        <div className="project">
          <img src="../../images/ironbook.png" alt="Ironbook" />
          <div className="project-info">
            <h3>Ironbook</h3>
            <p>
              A social networking application that allows users to create
              profiles, post pictures and keep in touch with friends using real
              time chat messaging.
            </p>
            <p>
              Technologies: HTML, CSS, JavaScript, Node.js, Express.js,
              Passport.js, MongoDB, Mongoose, Socket.IO
            </p>
            <a href="https://ironbook.herokuapp.com/">
              <button>VIEW WEBSITE</button>
            </a>
          </div>
        </div>

        {/* Recipe Project */}
        <div className="project">
          <img src="../../images/dishitout.png" alt="Dish-It-Out" />

          <div className="project-info">
            <h3>Dish-It-Out</h3>
            <p>
              A recipe application with access to more than 360,000 recipes for
              the user to personalize their own recipe books and keep track of
              their favorite recipes.
            </p>
            <p>
              Technologies: HTML, CSS, JavaScript, React.js, Node.js,
              Express.js, Passport.js, MongoDB, Mongoose
            </p>
            <a href="https://dish-it-out.netlify.app">
              <button>VIEW WEBSITE</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
