import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGraduationCap } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#">
              <FaGraduationCap className="logo-icon" />
              <span className="college-name">Training & Placement Cell</span>
            </a>
          </div>

          <button 
            className="mobile-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#stats" onClick={closeMenu}>Placements</a></li>
              <li><a href="#recruiters" onClick={closeMenu}>Recruiters</a></li>
              <li><a href="#reports" onClick={closeMenu}>Reports</a></li>
              <li><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
              <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
              <li><a href="#team" onClick={closeMenu}>Team</a></li>
              <li><a href="#contact" className="btn" onClick={closeMenu}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;