import './Recruiters.css';

const Recruiters = () => {
  // List of top recruiters
  const recruiters = [
    {
      id: 1,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/768px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944",
      name: 'TCS',
    },
    {
      id: 2,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png",
      name: 'Infosys',
    },
    {
      id: 3,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/566px-Wipro_Primary_Logo_Color_RGB.svg.png?20220321185443",
      name: 'Wipro',
    },
    {
      id: 4,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kyndryl_logo.svg/189px-Kyndryl_logo.svg.png?20211106052855",
      name: 'Kyndryl',
    },
    {
      id: 5,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/245px-Accenture.svg.png",
      name: 'Accenture',
    },
    {
      id: 6,
      url: "https://ribboncommunications.com/themes/custom/ribbon2020/images/ribbon-logo-color-1.svg",
      name: 'Ribbon',
    },
    {
      id: 7,
      url: "https://upload.wikimedia.org/wikipedia/commons/0/00/Unicourt-logo.png?20220905115142",
      name: 'Unicourt',
    },
    {
      id: 8,
      url: "https://mirafra.com/wp-content/uploads/2023/07/mirafra-logo-hires-1.svg",
      name: 'Mirafra',
    },
    {
      id: 9,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Robosoft_logo_.png/1197px-Robosoft_logo_.png?20160116112727",
      name: 'Robosoft',
    },
    {
      id: 10,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png?20161018020339",
      name: 'Deloitte',
    },
    {
      id: 11,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/150px-HP_logo_2012.svg.png",
      name: 'HP',
    },
  ];

  return (
    <section className="recruiters section" id="recruiters">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: "2rem" }}>
          Our Top Recruiters
        </h2>
        <p className="section-description">
          We are proud to partner with leading organizations that recognize the talent and potential of our students.
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee" style={{ "--quantity": recruiters.length }}>
          {recruiters.map((recruiter, index) => (
            <div
              className="recruiter-logo"
              key={recruiter.id}
              style={{ "--position": index }}
            >
              <img src={recruiter.url} alt={recruiter.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiters;
