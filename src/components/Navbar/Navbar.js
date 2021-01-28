import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (open) => {
    const navMenu = document.querySelector("nav ul");

    setOpen(!open);
    if (open) {
      navMenu.classList.toggle("nav-open");
    } else {
      navMenu.classList.toggle("nav-close");
    }
  };

  return (
    <nav>
      <div>
        <h1>Kevin Medina</h1>
      </div>

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

      <div className="burger-menu" open={open} onClick={() => toggleMenu(open)}>
        <div className="link1"></div>
        <div className="link2"></div>
        <div className="link3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
