import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    const links = document.querySelector(".nav-links");
    const ham = document.querySelector(".burger-menu");
    links.classList.toggle("nav-active");
    ham.classList.toggle("toggle");
  };

  return (
    <nav>
      <div>
        <h1>Kevin Medina</h1>
      </div>

      <div className="nav-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/projects">
          Projects
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>

      <div className="burger-menu" onClick={() => toggleMenu()}>
        <div className="link1"></div>
        <div className="link2"></div>
        <div className="link3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
