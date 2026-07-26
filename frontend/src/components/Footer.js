import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-advanced">
      <div className="footer-grid">
        
        {/* Column 1: Church Brand/Logo */}
        <div className="footer-brand">
          <h2 className="footer-logo">Grace Church <span>OF GOD</span></h2>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/beliefs">Our Beliefs</Link></li>
            <li><Link to="/ministries">Ministries</Link></li>
            <li><Link to="/sermons">Sermons</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/give">Give</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Service Times */}
        <div className="footer-section">
          <h3>SERVICE TIMES</h3>
          <ul className="footer-service-times">
            <li><span>Sunday Worship</span> <span className="time-highlight">10:00 AM</span></li>
            <li><span>Midweek Service</span> <span className="time-tba">TBA</span></li>
            <li><span>Prayer Meeting</span> <span className="time-tba">TBA</span></li>
            <li><span>Bible Study</span> <span className="time-tba">TBA</span></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-section contact-info">
          <h3>CONTACT</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <p>Village Bhooda, Sector 81,</p>
                <p>Noida Phase 2, UP 201305</p>
              </div>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <p>+91 XXXXX XXXXX</p> {/* Replace with Pastor Gore Pariyar's actual number */}
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <p>info@gracechurchofgod.com</p>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;