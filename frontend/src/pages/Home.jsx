import React from 'react';
import { Link } from 'react-router-dom';
import { FaChild, FaUsers, FaFemale, FaMale, FaMusic, FaPray, FaGlobe, FaVideo, FaQuoteLeft } from 'react-icons/fa';

import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. Enhanced Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Grace Church of God</h1>
          <p>We are delighted to welcome you. Our desire is to see people encounter Jesus, grow in faith, and walk in the victory He has prepared for them.</p>
          <p className="scripture">"For we walk by faith, not by sight." - 2 Corinthians 5:7</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn-secondary">Who We Are</Link>
            <Link to="/contact" className="btn-primary">Plan Your Visit</Link>
          </div>
        </div>
      </section>

      {/* 2. Enhanced Welcome Section with Vision & Mission */}
      <section className="welcome">
        <div className="welcome-content-wrapper">
          <div className="welcome-text">
            <h4>WHO WE ARE</h4>
            <h2>A Place to Believe, Belong & Become</h2>
            <p className="welcome-intro">
              Grace Church of God is a vibrant community of believers committed to seeing lives transformed by the power of the Gospel.
            </p>
            
            <div className="vision-mission">
              <div className="vm-box">
                <h3 className="vm-title">Our Vision</h3>
                <p>To raise disciples of Jesus Christ who walk in faith, demonstrate God's love, and impact their generation through the power of the Holy Spirit.</p>
              </div>
              <div className="vm-box">
                <h3 className="vm-title">Our Mission</h3>
                <ul className="mission-list">
                  <li>Preach the Gospel, teach the Word</li>
                  <li>Build strong families</li>
                  <li>Equip believers for ministry</li>
                  <li>Reach communities with God's love</li>
                </ul>
              </div>
            </div>
            <Link to="/about" className="btn-outline">Learn More &rarr;</Link>
          </div>
          
          <div className="pastor-card">
            <div className="pastor-image-wrapper">
              <img src="/pastor.jpg" alt="Pastor Gore Pariyar" className="pastor-image" />
            </div>
            <div className="pastor-info">
              <h3>Pastor Gore Pariyar</h3>
              <p>Senior Pastor</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW: Ministries Grid Section */}
      <section className="ministries-preview">
        <div className="section-header">
          <h4>OUR MINISTRIES</h4>
          <h2>Find Your Place to Serve</h2>
          <p>We have a place for everyone. Discover a ministry where you can grow and make a difference.</p>
        </div>
        
        <div className="ministries-grid">
          <div className="min-card"><FaChild className="min-icon icon-blue"/> <span>Sunday School</span></div>
          <div className="min-card"><FaUsers className="min-icon icon-purple"/> <span>Youth Ministry</span></div>
          <div className="min-card"><FaFemale className="min-icon icon-pink"/> <span>Women's Fellowship</span></div>
          <div className="min-card"><FaMale className="min-icon icon-green"/> <span>Men's Fellowship</span></div>
          <div className="min-card"><FaMusic className="min-icon icon-orange"/> <span>Worship Ministry</span></div>
          <div className="min-card"><FaPray className="min-icon icon-indigo"/> <span>Prayer Ministry</span></div>
          <div className="min-card"><FaGlobe className="min-icon icon-red"/> <span>Evangelism Ministry</span></div>
          <div className="min-card"><FaVideo className="min-icon icon-teal"/> <span>Media Ministry</span></div>
        </div>
        
        <div className="center-btn">
          <Link to="/ministries" className="btn-outline">Explore All Ministries &rarr;</Link>
        </div>
      </section>

      {/* 4. NEW: Testimonies Section */}
      <section className="testimonies-section">
        <div className="section-header">
          <h4>TESTIMONIES</h4>
          <h2>What God Has Done</h2>
          <p>Real stories of lives transformed by the grace and power of God.</p>
        </div>

        <div className="testimonies-grid">
          <div className="testimony-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimony-author">
              <div className="avatar bg-orange">SM</div>
              <div>
                <h4>Sarah M.</h4>
                <span>Salvation</span>
              </div>
            </div>
            <p>"I came broken and lost, but through this church community, I found Jesus and my life has never been the same. His grace truly transforms!"</p>
          </div>

          <div className="testimony-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimony-author">
              <div className="avatar bg-blue">DK</div>
              <div>
                <h4>David K.</h4>
                <span>Healing</span>
              </div>
            </div>
            <p>"The doctors said there was no cure, but God had a different plan. After the prayer team prayed for me, I was completely healed. All glory to God!"</p>
          </div>

          <div className="testimony-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimony-author">
              <div className="avatar bg-purple">GT</div>
              <div>
                <h4>Grace T.</h4>
                <span>Family Restoration</span>
              </div>
            </div>
            <p>"My marriage was on the brink of collapse. Through pastoral counseling and prayer, God restored our family. We are stronger than ever!"</p>
          </div>
        </div>
      </section>

      {/* 5. NEW: Bottom CTA Section */}
      <section className="bottom-cta">
        <h2>Ready to Take the Next Step?</h2>
        <p>Whether you're new to faith or looking for a church home, we would love to meet you.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Plan Your Visit</Link>
          <Link to="/prayer-request" className="btn-secondary-dark">Submit A Prayer Request</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;