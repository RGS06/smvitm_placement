import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Aditya Malhotra',
    position: 'Software Engineer at Google',
    quote: 'The Training and Placement Cell provided exceptional support throughout my placement journey. The mock interviews and resume building workshops were particularly helpful in preparing me for the recruitment process at Google.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Meera Patel',
    position: 'UX Designer at Microsoft',
    quote: 'I am grateful to the placement cell for helping me secure my dream role at Microsoft. The industry connections and personalized guidance from the TPO were instrumental in my success.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Rajiv Khanna',
    position: 'Product Manager at Amazon',
    quote: "The placement team's dedication and the quality of training programs they organized gave me a competitive edge during interviews. They truly go above and beyond to ensure students are well-prepared for the corporate world.",
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const length = testimonials.length;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(slideInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [length]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!testimonials.length) return null;

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">What Our Alumni Say</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Hear from our graduates about their experience with our Training and Placement Cell.
        </p>

        <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="200">
          <div className="slider-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === current ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-text">
                    <p className="quote">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next">
            <FaChevronRight />
          </button>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;