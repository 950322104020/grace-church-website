import React, { useState } from 'react';
import './PrayerRequest.css';

const PrayerRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });
  const [status, setStatus] = useState(''); // To show success or error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/prayer-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Thank you! Your prayer request has been received.');
        setFormData({ name: '', email: '', request: '' }); // Clear the form
      } else {
        setStatus(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="prayer-container">
      <div className="prayer-header">
        <h1>Submit a Prayer Request</h1>
        <p>God hears every prayer. Share your request with us, and our team will be interceding for you.</p>
      </div>

      <form className="prayer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="John Doe"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (Optional)</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="For follow-up prayer"
          />
        </div>

        <div className="form-group">
          <label htmlFor="request">Your Prayer Request</label>
          <textarea 
            id="request" 
            name="request" 
            rows="6" 
            value={formData.request} 
            onChange={handleChange} 
            placeholder="Share your heart with us..."
            required 
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Submit Prayer Request</button>
        {status && <p style={{ marginTop: '1rem', fontWeight: 'bold', color: status.includes('Thank you') ? 'green' : 'red' }}>{status}</p>}
      </form>
    </div>
  );
};

export default PrayerRequest;