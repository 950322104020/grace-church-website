import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // 1. Set up state to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle the form submission and talk to the backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from reloading!
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Thank you! Your message has been successfully sent to our team.');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Unable to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#1a2530' }}>Get in Touch</h1>
      
      <div className="contact-wrapper">
        {/* Contact Info Side */}
        <div className="contact-info">
          <h3>Church Information</h3>
          <p><strong>Senior Pastor:</strong> Pastor Gore Pariyar</p>
          <p><strong>Email:</strong> info@gracechurchofgod.com</p>
          <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
          <br/>
          <h3>Our Address</h3>
          <p>Village Bhooda, Sector 81</p>
          <p>Noida Phase 2, UP 201305</p>
        </div>

        {/* Contact Form Side */}
        <div className="contact-form-section">
          <h3>Send us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
            {status && (
              <p style={{ marginTop: '1rem', fontWeight: 'bold', color: status.includes('Thank you') ? 'green' : 'red' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;