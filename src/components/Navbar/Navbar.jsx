import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>
            Emp<span>Tasks</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            <li className="color">Home</li>
          </Link>
          <li className="color">Tasks</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
        <Link to="/login">
          <button className="log-in">Log in</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
