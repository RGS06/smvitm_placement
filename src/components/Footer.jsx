import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaGraduationCap } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <FaGraduationCap className="footer-logo-icon" />
            <div className="footer-title">
              <h3>Training & Placement Cell</h3>
              <p>Your Gateway to a Successful Career</p>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FaEnvelope className="footer-icon" />
                <span>placement@sode-edu.in</span>
              </li>
              <li>
                <FaPhone className="footer-icon" />
                <span>+91 9742406206</span>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Training & Placement Office, College Campus, Main Building</span>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#stats">Placement Statistics</a></li>
              <li><a href="#recruiters">Our Recruiters</a></li>
              <li><a href="#reports">Reports</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#">Download Brochure</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/shri-madhwa-vadiraja-institute-of-technology-and-management/" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/smvitm.sode/" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/officialsmvitm" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/SMVITMBANTAKAL" className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Training & Placement Cell. All Rights Reserved.</p>
          <p className="footer-credit">Designed with ❤️ by Placement Cell Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
