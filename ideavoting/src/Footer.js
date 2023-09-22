import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ideas">Ideas</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/SubmitIdeaForm">SubmitIdeaForm</a></li>
          </ul>
        </div>
        <div className="footer-social">
          {/* Social media icons or links */}
          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Christexfndn. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
