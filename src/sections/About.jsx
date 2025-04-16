import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Training & Placement Cell</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="src/images/tpc.png" alt="Placement Office" />
          </div>

          <div className="about-text">
            <h3>Your Gateway to Career Excellence</h3>
            <p>
              The Training and Placement Cell serves as a bridge between academic excellence and professional opportunities.
              We work diligently to connect our talented students with the leading companies in various industries.
            </p>
            <h3>Our Vision</h3>
            <p>
              To prepare students for successful careers in the global marketplace by providing comprehensive training,
              placement services, and industry connections that align with their career aspirations and skill sets.
            </p>
            <h3>Our Mission</h3>
            <p>
              To prepare students for successful careers in the global marketplace by providing comprehensive training,
              placement services, and industry connections that align with their career aspirations and skill sets.
            </p>

            <h3>What We Offer</h3>
            <ul className="about-list">
                <li>🌐 <strong>Industry-Oriented Training Programs</strong></li>
                <li>🎯 <strong>Career Counseling & Guidance</strong></li>
                <li>📝 <strong>Resume Building & Interview Preparation</strong></li>
                <li>💼 <strong>On-Campus Recruitment Drives</strong></li>
                <li>🏭 <strong>Industry Visits & Internship Opportunities</strong></li>
                <li>🤝 <strong>Alumni Network & Mentorship Programs</strong></li>
            </ul>

            <a href="#contact" className="btn">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
