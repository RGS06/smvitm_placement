import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample data for placed students
  const students = [
    {
      id: 1,
      name: 'Priya Sharma',
      company: 'Google',
      package: '32 LPA',
      batch: '2023',
      department: 'CSE',
      color: '#4285F4'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      company: 'Microsoft',
      package: '28 LPA',
      batch: '2023',
      department: 'AI&DS',
      color: '#00A4EF'
    },
    {
      id: 3,
      name: 'Neha Singh',
      company: 'Amazon',
      package: '25 LPA',
      batch: '2023',
      department: 'CSE',
      color: '#FF9900'
    },
    {
      id: 4,
      name: 'Amit Kumar',
      company: 'TCS',
      package: '12 LPA',
      batch: '2023',
      department: 'ECE',
      color: '#0066CC'
    },
    {
      id: 5,
      name: 'Sneha Patel',
      company: 'Infosys',
      package: '11 LPA',
      batch: '2023',
      department: 'AIML',
      color: '#2AD2C9'
    },
    {
      id: 6,
      name: 'Rohan Gupta',
      company: 'Wipro',
      package: '10 LPA',
      batch: '2023',
      department: 'ME',
      color: '#614AE4'
    },
    {
      id: 7,
      name: 'Anjali Desai',
      company: 'Accenture',
      package: '9.5 LPA',
      batch: '2023',
      department: 'ECE',
      color: '#A100FF'
    },
    {
      id: 8,
      name: 'Vikram Jayant',
      company: 'Deloitte',
      package: '14 LPA',
      batch: '2023',
      department: 'CV',
      color: '#86BC25'
    }
  ];

  // Get unique departments for filter
  const departments = ['All', 'CSE', 'AIML', 'AI&DS', 'CV', 'ECE', 'ME'];

  const openModal = (student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  // Filter students based on active filter
  const filteredStudents = activeFilter === 'All'
    ? students
    : students.filter(student => student.department === activeFilter);

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <h2 className="section-title">Our Placed Students</h2>
        <p className="section-description">
          <br></br>
          Meet some of our successful graduates who secured excellent opportunities through our placement cell.
        </p>

        <div className="department-filter">
          {departments.map(dept => (
            <button
              key={dept}
              className={`filter-btn ${activeFilter === dept ? 'active' : ''}`}
              onClick={() => setActiveFilter(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredStudents.map(student => (
            <div className="student-card" key={student.id} onClick={() => openModal(student)}>
              <div className="student-image" style={{ backgroundColor: student.color }}>
                <FaUser className="user-icon" />
              </div>
              <div className="student-info">
                <h3>{student.name}</h3>
                <p className="company">{student.company}</p>
                <p className="department">{student.department}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="no-results">
            <p>No students found for this department.</p>
          </div>
        )}

        {selectedStudent && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="student-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={closeModal}>&times;</button>
              <div className="modal-content">
                <div className="modal-image" style={{ backgroundColor: selectedStudent.color }}>
                  <FaUser className="modal-user-icon" />
                </div>
                <div className="modal-details">
                  <h3>{selectedStudent.name}</h3>
                  <p className="company"><strong>Company:</strong> {selectedStudent.company}</p>
                  <p><strong>Package:</strong> {selectedStudent.package}</p>
                  <p><strong>Batch:</strong> {selectedStudent.batch}</p>
                  <p><strong>Department:</strong> {selectedStudent.department}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
