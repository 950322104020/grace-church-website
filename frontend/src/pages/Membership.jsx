import React, { useState } from 'react';
import './Membership.css';

const Membership = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('http://localhost:5000/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Thank you! Your membership request has been submitted.');
        setFormData({ name: '', email: '', phone: '', address: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Unable to connect to the server.');
    }
  };

  return (
    <div className="membership-page">
      <div className="membership-header">
        <h1>Become a Member</h1>
        <p>Join the Grace Church of God family. Fill out the form below to begin your membership journey.</p>
      </div>

      <div className="membership-form-container">
        <form className="membership-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Home Address" value={formData.address} onChange={handleChange} required />
          <textarea name="message" placeholder="Tell us a little about yourself (Optional)" rows="4" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="btn-primary">Submit Application</button>
          
          {status && (
            <p className="status-message" style={{ color: status.includes('Thank you') ? 'green' : 'red' }}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Membership;