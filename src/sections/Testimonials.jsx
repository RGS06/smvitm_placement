import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonials.css'; // Custom styles if any

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

  if (!testimonials.length) return null;

  return (
    <section
      className="section bg-gradient-to-br from-secondary to-secondary-dark text-white py-20 px-4"
      id="testimonials"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-4" data-aos="fade-up">
          What Our Alumni Say
        </h2>
        <p
          className="text-center text-light-gray text-lg mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hear from our graduates about their experience with our Training and Placement Cell.
        </p>

        <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute top-8 left-8 text-white opacity-20">
            <FaQuoteLeft size={60} />
          </div>

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ease-in-out ${
                index === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg mx-auto md:mx-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left flex-1">
                  <p className="italic text-lg mb-6">{testimonial.quote}</p>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-accent">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  index === current ? 'bg-accent' : 'bg-white/30'
                }`}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrent(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm"
            onClick={nextSlide}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
