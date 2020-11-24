import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const toggleBurger = () => {};

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
      <div className="burger-menu" onClick={toggleBurger}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </nav>
  );
};

export default Navbar;
