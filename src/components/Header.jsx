import { useState } from 'react';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#">
              <FaGraduationCap className="logo-icon" />
              <span className="college-name">Training & Placement Cell</span>
            </a>
          </div>

          <div className="mobile-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#stats">Placements</a></li>
              <li><a href="#recruiters">Recruiters</a></li>
              <li><a href="#reports">Reports</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact" className="btn">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
