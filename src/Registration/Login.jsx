// src/pages/Login.js
import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      rememberMe: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Add backend API call here (e.g., send formData to server)
    console.log('Login data:', formData);
    onLogin(); // Trigger authentication
    navigate('/main'); // Redirect to MainPage
  };

  // Handle forget password (placeholder for future implementation)
  const handleForgetPassword = () => {
    // Add logic for password reset (e.g., navigate to reset page or show modal)
    console.log('Forget password clicked');
    alert('Password reset functionality not implemented yet.');
  };

  return (
    <div className="homebody">
      <h1>Purse</h1>
      <div className="Formmain">
        <form onSubmit={handleSubmit} className="FormINfo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Input Email"
           
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
            
          />

          <div className="Formdownsection">
            <div style={{ display: 'flex' }}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleCheckboxChange}
              />
              <h3>Remember me</h3>
            </div>
            <div className="forgetpass">
              <h3 onClick={handleForgetPassword} style={{ cursor: 'pointer' }}>
                Forget password
              </h3>
            </div>
          </div>

          <div className="btnLog "  onClick={() => navigate('/Purse')}>
            <button type="submit">Login</button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default Login;