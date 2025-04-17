import './Hero.css';
import { useEffect, useState } from 'react';
import pb from '../utils/pbClient'; 
// import { useNavigate } from 'react-router-dom'; // Uncomment if you need navigation
import Image2025 from '../assets/2025.jpeg';
import Infosys from '../assets/Infosys.png';
import Kyndryl from '../assets/Kyndryl.png';

const images = [Image2025, Infosys, Kyndryl];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  
  const [newsItems, setnewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

    useEffect(() => {
      fetchNewsletters();
    }, []);

    const fetchNewsletters = async () => {
      try {
        const data = await pb.collection('announcements').getFullList(200, {
          sort: '-created'
        });
        console.log("Fetched data:", data);  // <-- Debug log
        setnewsItems(data);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching newsletters:', error);
      } 
    };
    

  

  const newsItemsz = [
    {
      id: 1,
      title: 'Campus placement drive by Accenture on 15th May 2023',
      date: '01/05/2023',
      link: '#',
      isNew: true,
    },
    {
      id: 2,
      title: 'Infosys off-campus recruitment for 2023 batch',
      date: '12/04/2023',
      link: '#',
      isNew: true,
    },
    {
      id: 3,
      title: 'Workshop on Resume Building on 20th April 2023',
      date: '10/04/2023',
      link: '#',
    },
    {
      id: 4,
      title: 'TCS NQT registrations open for 2023 batch',
      date: '05/04/2023',
      link: '#',
    },
    {
      id: 5,
      title: 'Placement orientation program for pre-final year students',
      date: '01/04/2023',
      link: '#',
    },
    {
      id: 6,
      title: 'Internship opportunities at Amazon for B.Tech students',
      date: '28/03/2023',
      link: '#',
    },
    {
      id: 7,
      title: 'Technical symposium registration now open',
      date: '25/03/2023',
      link: '#',
    },
  ];

  // Function to navigate to the previous image
  const goToPrevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Function to navigate to the next image
  const goToNextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero-container">
      <section
        className="hero"
        id="home"
        style={{ height: isMobile ? '60vh' : '70vh' }}
      >
        <div className="hero-background">
          <div className="hero-slides" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="hero-slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-overlay"></div>
        
        {/* Navigation Buttons */}
        <button className="slider-nav prev" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="slider-nav next" onClick={goToNextSlide}>
          &gt;
        </button>
        
        {/* Dots Navigation */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            ></button>
          ))}
        </div>
        
        <div className="hero-content">
          <p className="hero-subtitle"></p>
          <div className="hero-buttons"></div>
        </div>
      </section>
      
      {/* News Section */}
      <div className="news-container">
        <div className="news-header">
          <h2>
            Latest News
            <span className="new-indicator">NEW</span>
          </h2>
          <a href="#" className="view-all-link">View All</a>
        </div>
        <div className="news-scroll-container">
          <div className="news-ticker">
            {newsItems.map((item) => (
              <div key={item.id} className={`news-item ${item.isNew ? 'new' : ''}`}>
                <span className="news-date">{item.date}</span>
                <a href={item.link} className="news-title">{item.title}</a>
              </div>
            ))}
            {/* Duplicate first few items to create seamless loop */}
            {newsItems.slice(0, 2).map((item) => (
              <div key={`duplicate-${item.id}`} className={`news-item ${item.isNew ? 'new' : ''}`}>
                <span className="news-date">{item.date}</span>
                <a href={item.link} className="news-title">{item.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
