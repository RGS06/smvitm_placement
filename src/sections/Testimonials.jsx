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
    quote:
      'The Training and Placement Cell provided exceptional support throughout my placement journey. The mock interviews and resume building workshops were particularly helpful in preparing me for the recruitment process at Google.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Meera Patel',
    position: 'UX Designer at Microsoft',
    quote:
      'I am grateful to the placement cell for helping me secure my dream role at Microsoft. The industry connections and personalized guidance from the TPO were instrumental in my success.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Rajiv Khanna',
    position: 'Product Manager at Amazon',
    quote:
      "The placement team's dedication and the quality of training programs they organized gave me a competitive edge during interviews. They truly go above and beyond to ensure students are well-prepared for the corporate world.",
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const length = testimonials.length;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
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

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">What Our Alumni Say</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          <br></br>
          Hear from our graduates about their experience with our Training and Placement Cell.
        </p>

        <div className="slider-container" data-aos="fade-up" data-aos-delay="200">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="testimonial-card">
                  <div className="quote-icon">
                    <FaQuoteLeft size={50} />
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-img">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-text">
                      <p className="quote">"{testimonial.quote}"</p>
                      <h4>{testimonial.name}</h4>
                      <p className="position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? 'active' : ''}`}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button className="nav-btn left" onClick={prevSlide} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <button className="nav-btn right" onClick={nextSlide} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
