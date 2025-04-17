import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
  const [newsContent, setNewsContent] = useState([]);
  const [newsImages, setNewsImages] = useState([]);
  const [currentContentSlide, setCurrentContentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [contentRes, imageRes] = await Promise.all([
          fetch('/NewsLetter/newsletter.json'),
          fetch('/NewsLetter/newImageLink.json')
        ]);

        if (!contentRes.ok || !imageRes.ok) {
          throw new Error('Failed to fetch one or more files');
        }

        const [contentData, imageData] = await Promise.all([
          contentRes.json(),
          imageRes.json()
        ]);

        setNewsContent(contentData);
        setNewsImages(imageData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const nextContentSlide = () => {
    setCurrentContentSlide(prev => 
      prev === newsContent.length - 1 ? 0 : prev + 1
    );
  };

  const prevContentSlide = () => {
    setCurrentContentSlide(prev => 
      prev === 0 ? newsContent.length - 1 : prev - 1
    );
  };

  const nextImageSlide = () => {
    setCurrentImageSlide(prev => 
      prev === newsImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImageSlide = () => {
    setCurrentImageSlide(prev => 
      prev === 0 ? newsImages.length - 1 : prev - 1
    );
  };

  const goToContentSlide = (index) => {
    setCurrentContentSlide(index);
  };

  const goToImageSlide = (index) => {
    setCurrentImageSlide(index);
  };

  useEffect(() => {
    const contentInterval = setInterval(() => {
      nextContentSlide();
    }, 1500);
    
    const imageInterval = setInterval(() => {
      nextImageSlide();
    }, 1500); 
    
    return () => {
      clearInterval(contentInterval);
      clearInterval(imageInterval);
    };
  }, [currentContentSlide, currentImageSlide, newsContent.length, newsImages.length]);

  if (isLoading) {
    return (
      <div className="newsletter-container">
        <div className="newsletter-skeleton">
          <div className="skeleton-image"></div>
          <div className="skeleton-title"></div>
          <div className="skeleton-content"></div>
        </div>
      </div>
    );
  }

  const hasContent = newsContent.length > 0 || newsImages.length > 0;

  if (!hasContent) {
    return (
      <div className="newsletter-container">
        <p>No newsletters available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="container">
        <h2 className="section-title">Newsletter</h2>
        <p className="section-description">
          Stay updated with our latest placement news and announcements.
        </p>

        <div className="newsletter-slider">
          <div className="slider-container">
            {/* Image Slider */}
            <div className="newsletter-image-slider">
              {newsImages.length > 0 && newsImages.map((image, index) => (
                <div 
                  key={`image-${index}`}
                  className={`newsletter-image-slide ${index === currentImageSlide ? 'active' : ''}`}
                >
                  <div className="newsletter-image-container">
                    <img 
                      src={image.image || ''} 
                      alt={`Newsletter image ${index + 1}`} 
                      className="newsletter-image"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/images/newsletter/default.jpg';
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Content Slider */}
            <div className="newsletter-content-slider">
              {newsContent.length > 0 && newsContent.map((content, index) => (
                <div 
                  key={`content-${index}`}
                  className={`newsletter-content-slide ${index === currentContentSlide ? 'active' : ''}`}
                >
                  <div className="newsletter-text-container">
                    <h3 className="newsletter-title">{content.title || ''}</h3>
                    <div className="newsletter-content">
                      {content.content || ''}
                    </div>
                    <div className="newsletter-date">{content.date || ''}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots for Image Slider */}
          {newsImages.length > 0 && (
            <div className="slider-dots image-dots">
              {newsImages.map((_, index) => (
                <button
                  key={`image-dot-${index}`}
                  className={`dot ${index === currentImageSlide ? 'active' : ''}`}
                  onClick={() => goToImageSlide(index)}
                  aria-label={`Go to image slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Dots for Content Slider */}
          {newsContent.length > 0 && (
            <div className="slider-dots content-dots">
              {newsContent.map((_, index) => (
                <button
                  key={`content-dot-${index}`}
                  className={`dot ${index === currentContentSlide ? 'active' : ''}`}
                  onClick={() => goToContentSlide(index)}
                  aria-label={`Go to content slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;