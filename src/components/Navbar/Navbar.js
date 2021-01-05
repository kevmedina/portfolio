import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    const links = document.querySelector(".nav-links");
    links.classList.toggle("nav-active");

    const line1 = document.querySelector(".link1");
    line1.classList.toggle("toggle1");

    const line2 = document.querySelector(".link2");
    line2.classList.toggle("toggle2");

    const line3 = document.querySelector(".link3");
    line3.classList.toggle("toggle3");
  };

  return (
    <nav>
      <div>
        <h1>Kevin Medina</h1>
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
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
