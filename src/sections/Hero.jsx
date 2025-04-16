import './Hero.css';
import { useEffect, useState } from 'react';
import Image2025 from '../assets/2025.jpeg';
import Infosys from '../assets/Infosys.png';
import Kyndryl from '../assets/Kyndryl.png';

const images = [Image2025, Infosys, Kyndryl];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${images[currentImage]})` }} // Dynamic background image
    >
      {/* Content of your Hero section */}
    </section>
  );
};

export default Hero;
