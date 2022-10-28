import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h1>
          Emp<span>Tasks</span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <li className="color">Home</li>
          <li className="color">Tasks</li>
          <li>About</li>
          <li>Profile</li>
        </ul>
        <button className="log-in">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
