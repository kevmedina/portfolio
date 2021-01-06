import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Hi, I am Kevin Medina</h1>
        <h3>Full Stack Web Developer</h3>
        <Link to="/projects" className="home-link">
          View Projects
        </Link>
      </header>
    </div>
  );
};

export default Home;
