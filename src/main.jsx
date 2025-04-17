import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
// import Login from './pages/Login.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={
          <>
          <Login/> 
          </>
          } />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </Router>
   
  </StrictMode>,
)
