import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pb from '../utils/pbClient.js'; // Adjust the path as necessary
import './Admin.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const authData = await pb.collection('users').authWithPassword(
        credentials.username,
        credentials.password
      );

      // Store auth token if needed
      localStorage.setItem('pb_auth_token', pb.authStore.token);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials or server error');
    }


    // Simple validation (in production, use proper authentication)
    // if (credentials.username === 'admin' && credentials.password === 'admin123') {
    //   localStorage.setItem('isAuthenticated', 'true');
    //   navigate('/dashboard');
    // } else {
    //   setError('Invalid credentials');
    // }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="section-title">Admin Login</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;