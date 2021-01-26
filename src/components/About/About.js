import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-about-container">
        <div className="about-info">
          <div>
            <h3>
              Hi there! I am <strong>Kevin Medina</strong>
            </h3>
            <p>
              I am located in the South Florida area and passionate about
              learning anything related to web development. I'm a Full Stack Web
              Developer that specializes in using the MERN stack. I love to make
              people's idea become reality with building responsive and dynamic
              web applications.
            </p>
          </div>
          <div>
            <h3>Skills</h3>
            <p>
              JavaScript, React.js, Node.js, Express.js, Passport.js, MongoDB,
              Mongoose, jQuery, AJAX, HTML, CSS, SASS, Responsive Design,
              Bootstrap, Redux, GraphQL, Git, GitHub, Heroku, Netlify
            </p>
          </div>
          <div className="buttons-container">
            <a
              href="https://www.linkedin.com/in/kevmedina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Let's Work</button>
            </a>
            <a
              href="https://docs.google.com/document/d/1tIu84tmJvB5OH_kmre4GJDvtVQcIqFZvMaELL1ZyWPI/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>My Resume</button>
            </a>
            <a
              href="https://github.com/kevmedina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>GitHub</button>
            </a>
            <a
              href="https://www.linkedin.com/in/kevmedina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
