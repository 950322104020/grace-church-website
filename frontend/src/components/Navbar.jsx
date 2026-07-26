import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMobileMenu}>Grace Church</Link>
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={isMobileMenuOpen ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
        <li><Link to="/ministries" onClick={closeMobileMenu}>Ministries</Link></li>
        <li><Link to="/sermons" onClick={closeMobileMenu}>Sermons</Link></li>
        <li><Link to="/events" onClick={closeMobileMenu}>Events</Link></li>
        <li><Link to="/give" onClick={closeMobileMenu}>Give</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        <li><Link to="/membership" onClick={closeMobileMenu}>Membership</Link></li>
        <li className="mobile-cta">
          <Link to="/prayer-request" className="btn-prayer" onClick={closeMobileMenu}>Prayer Request</Link>
        </li>
      </ul>

      {/* Desktop CTA */}
      <div className="navbar-cta desktop-cta">
        <Link to="/prayer-request" className="btn-prayer">Prayer Request</Link>
      </div>
    </nav>
  );
};

export default Navbar;