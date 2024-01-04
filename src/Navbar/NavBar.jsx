import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-div">
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/Projects">Projects</Link>
      </p>
      <p>
        <Link to="/Faq">FAQ</Link>
      </p>
      <p>
        <Link to="/contact">Contact</Link>
      </p>
    </div>
  );
}

export default NavBar;
