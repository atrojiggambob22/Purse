// src/pages/SignUp.js
import React, { useState } from 'react';
import './Login.css'; // Update to SignUp.css if you have a separate stylesheet
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignup }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false,
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
      agreeTerms: e.target.checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms of Service');
      return;
    }
    // Add backend API call here (e.g., send formData to server)
    console.log('Signup data:', formData);
    onSignup(); // Trigger authentication
    navigate('/main'); // Redirect to MainPage
  };

  return (
    <div className="homebody">
      <h1>Create An Account</h1>
      <div className="Formmain">
        <form onSubmit={handleSubmit} className="FormINfo">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Astrojiggabob"
          />

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
            type="password" // Changed to password type for security
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter Password"
          />

          <div style={{ display: 'flex' }}>
            <input
              className="chekboxxx"
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleCheckboxChange}
              style={{ position: 'relative', top: '-5px' }}
            />
            <h3 style={{ fontWeight: '100', fontSize: '15px', position: 'relative', top: '15px' }}>
              I agree to the Terms of Service
            </h3>
          </div>

          <div className="btnLog btnSign " onClick={() => navigate('/login')} style={{textWrap:'nowrap'}}>
            <button type="submit">Create account</button>
          </div>
        </form>

       
      </div>
    </div>
  );
};

export default SignUp;