import './Recruiters.css';

const Recruiters = () => {
  // Sample list of top recruiters
  const recruiters = [
    { id: 1, name: 'TCS', color: '#0066CC' },
    { id: 2, name: 'Infosys', color: '#2AD2C9' },
    { id: 3, name: 'Wipro', color: '#614AE4' },
    { id: 4, name: 'Kyndryl', color: '#0070AD' },
    { id: 5, name: 'Accenture', color: '#A100FF' },
    { id: 6, name: 'HP', color: '#1F70C1' },
    { id: 7, name: 'Unicourt', color: '#4285F4' },
    { id: 8, name: 'Mirafra', color: '#00A4EF' },
    { id: 9, name: 'Robosoft', color: '#FF9900' },
    { id: 10, name: 'Deloitte', color: '#86BC25' }
  ];

  return (
    <section className="recruiters section" id="recruiters">
      <div className="container">
        <h2 className="section-title">Our Top Recruiters</h2>
        <p className="section-description">
          We are proud to partner with leading organizations that recognize the talent and potential of our students.
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee">
          {recruiters.map(recruiter => (
            <div className="recruiter-logo" key={recruiter.id} style={{ backgroundColor: recruiter.color }}>
              <span>{recruiter.name}</span>
            </div>
          ))}
          {recruiters.map(recruiter => (
            <div className="recruiter-logo" key={`dup-${recruiter.id}`} style={{ backgroundColor: recruiter.color }}>
              <span>{recruiter.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
