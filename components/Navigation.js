// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product Info</Link></li>
        <li><Link to="/images">Images</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
