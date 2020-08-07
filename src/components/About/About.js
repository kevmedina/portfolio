import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="inner-about-container">
        <div>
          <img src="../../images/profile_pic.jpeg" alt="profile-pic" />
        </div>
        <div className="about-info">
          <div>
            <h1>Hi, Nice to meet you!</h1>
            <p>
              I have over 7 years of experience in the homeowners insurance
              industry working as an underwriter. However, my passion for
              technology led me to pursue a career in web development. I’m a
              recent graduate from Ironhack’s Web Development Bootcamp which has
              now expanded my skills of creating responsive and dynamic web
              applications.
            </p>
          </div>
          <div>
            <h3>Technologies</h3>
            <p>
              JavaScript, React.js, Node.js, Express.js, Passport.js, MongoDB,
              Mongoose, jQuery, AJAX, HTML, CSS, SASS, Responsive Design,
              Bootstrap, Redux, GraphQL, Git, GitHub, Heroku, Netlify
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
