import { FaUserTie, FaUser } from 'react-icons/fa';
import './Team.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
      image: '/SHRIKANTH-PLACEMENT.jpg'
    },
    {
      id: 2,
      name: 'Mr. Raghavendra G.S',
      position: 'Placement Coordinator',
      color: '#C59048',
      department: 'CSE',
      email: 'raghugs.cs@sode-edu.in',
      image: '/rgs.png'
    },
    {
      id: 3,
      name: 'Ms. Ashritha',
      position: 'Placement Coordinator',
      color: '#7B1436',
      department: 'CSE',
      email: 'ashritha.cs@sode-edu.in',
      image: '/ashritha.jpg'
    },
    {
      id: 4,
      name: 'Ms. Yogeshwari B H ',
      position: 'Placement Coordinator',
      color: '#C59048',
      department: 'ECE',
      email: 'yogeshwary.ec@sode-edu.in',
      image: '/yogeshwary.jpg'
    },
    {
      id: 5,
      name: 'Ms. Vimitha',
      position: 'Placement Coordinator',
      color: '#7B1436',
      department: 'ECE',
      email: 'vimitha.ec@sode-edu.in',
      image: '/vimitha.jpg'
    },
    {
      id: 6,
      name: 'Mr. N Madhusoodhana Rao',
      position: 'Placement Coordinator',
      color: '#7B1436',
      department: 'CV',
      email: 'madhun.civil@sode-edu.in',
      image: '/madhu.jpg'
    },
    {
      id: 7,
      name: 'Mr. RaviNarayan R Rao',
      position: 'Placement Coordinator',
      color: '#7B1436',
      department: 'ME',
      email: 'ravinarayan.mech@sode-edu.in',
      image: '/ravi.jpg'
    },
    {
      id: 8,
      name: 'Mr.Balachandra Jogi',
      position: 'Placement Coordinator',
      color: '#7B1436',
      department: 'AI&DS',
      email: 'balachandra.cs@sode-edu.in',
      image: '/bala.jpg'
    },
    {
      id: 9,
      name: 'Ms. Mamatha',
      position: 'Placement Coordinator',
      color: '#7B1436',
      department: 'AI&ML',
      email: 'mamathas.ml@sode-edu.in',
      image: '/mamatha.jpg'
    }
  ];

  return (
    <section className="team section" id="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-description">
          <br />
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

        {/* Department Coordinators in Swiper Slider */}
        <h3 className="team-subheading">Department Coordinators</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="team-grid-slider"
        >
          {teamMembers
            .filter(member => !member.isTPO && !member.isAPO)
            .map(member => (
              <SwiperSlide key={member.id}>
                <div className="team-card">
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
