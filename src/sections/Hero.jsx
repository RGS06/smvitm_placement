import './Hero.css';
import { useEffect, useState } from 'react';
import Image2025 from '../assets/2025.jpeg';
import Infosys from '../assets/Infosys.png';
import Kyndryl from '../assets/Kyndryl.png';

const images = [Image2025, Infosys, Kyndryl];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className="hero"
      id="home"
      style={{ 
        backgroundImage: `url(${images[currentImage]})`,
        height: isMobile ? '60vh' : '70vh'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
       
        <p className="hero-subtitle">
        </p>
        <div className="hero-buttons">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;