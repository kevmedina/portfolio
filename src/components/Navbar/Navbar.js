import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = (open) => {
    setOpen(!open);
  };

  return (
    <nav>
      <div>
        <h1>Kevin Medina</h1>
      </div>

      <ul className={open ? "nav-open" : ""}>
        <li>
          <Link className="link" to="/" onClick={(open) => toggleMenu(open)}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/about"
            onClick={(open) => toggleMenu(open)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/projects"
            onClick={(open) => toggleMenu(open)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="/contact"
            onClick={(open) => toggleMenu(open)}
          >
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
