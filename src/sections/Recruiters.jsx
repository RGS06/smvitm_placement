import './Recruiters.css';
const Recruiters = () => {
  // Sample list of top recruiters
  const recruiters = [
    { id: 1, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/768px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944", name: 'TCS', color: '#000' },
    { id: 2, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png", name: 'Infosys', color: '#fff' },
    { id: 3, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/566px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443", name: 'Wipro', color: '' },
    { id: 4, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kyndryl_logo.svg/189px-Kyndryl_logo.svg.png?20211106052855", name: 'Kyndryl', color: '' },
    { id: 5, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/245px-Accenture.svg.png", name: 'Accenture', color: '' },
    { id: 6, url: "https://ribboncommunications.com/themes/custom/ribbon2020/images/ribbon-logo-color-1.svg", name: 'Ribbon', color: '#86BC25' },
    { id: 7, url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Unicourt-logo.png?20220905115142", name: 'Unicourt', color: '#4285F4' },
    { id: 8, url: "https://mirafra.com/wp-content/uploads/2023/07/mirafra-logo-hires-1.svg", name: 'Mirafra', color: '#00A4EF' },
    { id: 9, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Robosoft_logo_.png/1197px-Robosoft_logo_.png?20160116112727", name: 'Robosoft', color: '#FF9900' },
    { id: 10, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png?20161018020339", name: 'Deloitte', color: '#86BC25' },
    { id: 11, url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png", name: 'HP', color: '#1F70C1' },
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
            <div className="recruiter-logo" key={recruiter.id}>
              <img src={recruiter.url} alt={recruiter.name} loading='lazy' />
            </div>
          ))}
          {recruiters.map(recruiter => (
            <div className="recruiter-logo" key={`dup-${recruiter.id}`}>
              <img src={recruiter.url} alt={recruiter.name} loading='lazy' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
