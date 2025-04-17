import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsletterEditor from './NewsletterEditor';
import ImageManager from './ImageManager';
import './Admin.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('newsletters');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/admin/login');
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
      </header>
      
      <nav className="admin-tabs">
        <button 
          className={`tab-btn ${activeTab === 'newsletters' ? 'active' : ''}`}
          onClick={() => setActiveTab('newsletters')}
        >
          Newsletter Content
        </button>
        <button 
          className={`tab-btn ${activeTab === 'images' ? 'active' : ''}`}
          onClick={() => setActiveTab('images')}
        >
          Image Management
        </button>
      </nav>
      
      <div className="admin-content">
        {activeTab === 'newsletters' ? <NewsletterEditor /> : <ImageManager />}
      </div>
    </div>
  );
};

export default Dashboard;