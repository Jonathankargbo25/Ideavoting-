import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import logo from './img/christex foundation.png'; // Import your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/ideas">Ideas</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
          </li>
          <li className="navbar-item">
          <Link to="/SubmitIdeaForm">SubmitIdeaForm</Link>
          </li>
          
      </ul>
    </nav>
  );
};

export default Navbar;
