import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Hi, I'm Kevin. I build dynamic and responsive web applications.</h1>
        <Link className="home-link" to="/projects">
          View Projects
        </Link>
      </header>
    </div>
  );
};

export default Home;
