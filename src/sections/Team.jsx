import { FaUserTie, FaUser } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Roshan S Kotian',
      position: 'Head - Training & Placement',
      color: '#7B1436',
      email: 'placement@sode-edu.in',
      phone: '+91 9742406206',
      isTPO: true,
      message:
        'Our Training and Placement Cell is dedicated to bridging the gap between academia and industry. We strive to provide the best career opportunities to our students through rigorous training, industry exposure, and personalized guidance. Our goal is to prepare students not just for jobs, but for successful and fulfilling careers.',
      image: '/roshan.jpg' 
    },
    {
      id: 6,
      name: 'Mr. Shrikantha Mithanthaya',
      position: 'Assistant Placement Officer',
      color: '#7B1436',
      email: 'mithanthaya.office@sode-edu.in',
      phone: '+91 9916943300',
      isAPO: true,
      image: '/SHRIKANTH-PLACEMENT.jpg' // Example image path for APO
    },
    {
      id: 2,
      name: 'Prof. Sunita Sharma',
      position: 'Faculty Coordinator',
      color: '#C59048',
      department: 'Computer Science',
      email: 'sunita.sharma@college.edu',
      image: '/images/team/sunita.jpg'
    },
    {
      id: 3,
      name: 'Prof. Anand Patel',
      position: 'Faculty Coordinator',
      color: '#7B1436',
      department: 'Electronics & Communication',
      email: 'anand.patel@college.edu',
      image: '/images/team/anand.jpg'
    },
    {
      id: 4,
      name: 'Prof. Meera Gupta',
      position: 'Industry Relations Coordinator',
      color: '#C59048',
      department: 'Mechanical Engineering',
      email: 'meera.gupta@college.edu',
      image: '/images/team/meera.jpg'
    },
    {
      id: 5,
      name: 'Prof. Vikram Singh',
      position: 'Student Development Coordinator',
      color: '#7B1436',
      department: 'Information Technology',
      email: 'vikram.singh@college.edu',
      image: '/images/team/vikram.jpg'
    }
  ];

  return (
    <section className="team section" id="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
          Meet the dedicated professionals who work tirelessly to ensure our students receive the best placement opportunities.
        </p>

        {/* TPO and APO Section */}
        <div className="tpo-ap-container">
          {/* TPO Card */}
          {teamMembers
            .filter(member => member.isTPO)
            .map(tpo => (
              <div className="tpo-profile" key={tpo.id}>
                <div className="tpo-details">
                  <div className="tpo-image" style={{ backgroundColor: tpo.color }}>
                    <img src={tpo.image} alt={tpo.name} className="tpo-user-icon" />
                  </div>
                  <div className="tpo-info">
                    <h3>{tpo.name}</h3>
                    <p className="tpo-position">{tpo.position}</p>
                    <p><strong>Email:</strong> {tpo.email}</p>
                    <p><strong>Phone:</strong> {tpo.phone}</p>
                  </div>
                </div>
                <div className="tpo-message">
                  <h3>Message from TPO</h3>
                  <p>{tpo.message}</p>
                </div>
              </div>
            ))}

          {/* APO Card */}
          {teamMembers
            .filter(member => member.isAPO)
            .map(apo => (
              <div className="tpo-profile" key={apo.id}>
                <div className="tpo-details">
                  <div className="tpo-image" style={{ backgroundColor: apo.color }}>
                    <img src={apo.image} alt={apo.name} className="tpo-user-icon" />
                  </div>
                  <div className="tpo-info">
                    <h3>{apo.name}</h3>
                    <p className="tpo-position">{apo.position}</p>
                    <p><strong>Email:</strong> {apo.email}</p>
                    <p><strong>Phone:</strong> {apo.phone}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Team Members */}
        <h3 className="team-subheading">Department Coordinators</h3>
        <div className="team-grid">
          {teamMembers
            .filter(member => !member.isTPO && !member.isAPO)
            .map(member => (
              <div className="team-card" key={member.id}>
                <div className="team-image" style={{ backgroundColor: member.color }}>
                  <img src={member.image} alt={member.name} className="team-user-icon" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-department">{member.department}</p>
                  <p className="team-email">{member.email}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
