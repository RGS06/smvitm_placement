import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Mr. Claton Robert D’Souza',
    position: 'Infrastructure-Specialist at Kyndryl',
    quote:'My four years in CSE were a transformative journey, blending rigorous academics, hands-on projects, and invaluable faculty guidance that sharpened my technical and problem-solving skills. The departments industry-aligned approach and placement support helped me secure a rewarding career. I’m deeply grateful for the knowledge, growth, and opportunities that have set me on the path to success in tech',
    image: '/claton.jpg',
  },
  {
    id: 2,
    name: 'Mr. Prathviraj',
    position: 'Software Developer at Kambala Solutions',
    quote:
      'SMVITM offered a dynamic blend of academics, hands-on projects, and exposure to emerging tech, complemented by hackathons and faculty mentorship that honed my technical and leadership skills. Now at Kambala Solutions, I leverage this foundation to build innovative software solutions, embracing the transformative journey from campus to the ever-evolving tech industry.',
    image: '/prathviraj.jpg',
  },
  {
    id: 3,
    name: 'Chaitanya Anant Nilekani',
    position: 'KarMic Design Private Limited',
    quote:'My time at SMVITM transformed me through hands-on IoT/electronics projects, expert faculty guidance, and collaborative learning, building both technical skills and confidence. Now at Karmic Design Pvt Ltd, I am applying this strong foundation to real-world challenges. Grateful for the knowledge growth and lifelong connections that continue to shape my career',
    image: '/chaitanya.jpeg',
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
