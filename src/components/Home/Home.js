import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Hi, I am Kevin Medina</h1>
        <h3>Full Stack Web Developer</h3>
        <a href="#projects" className="home-link">
          View Projects
        </a>
      </header>
    </div>
  );
};

export default Home;
