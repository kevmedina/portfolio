import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Kevin Medina</h1>
      </div>
      <div>
        <ul>
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="/">
            <li>About</li>
          </Link>
          <Link className="link" to="/">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
