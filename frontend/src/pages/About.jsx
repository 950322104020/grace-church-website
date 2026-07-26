import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* 1. About Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h4>GRACE CHURCH OF GOD</h4>
          <h1>About<br/>Grace Church of God</h1>
          <p>A vibrant community raising disciples who walk in faith, demonstrate God's love, and impact their generation.</p>
          <Link to="/contact" className="btn-primary">Join Us Sunday</Link>
        </div>
      </section>

      {/* 2. Vision, Mission & Story Section */}
      <section className="about-details">
        
        {/* Left Column: Purpose */}
        <div className="about-column">
          <div className="column-header">
            <h4>OUR PURPOSE</h4>
            <h2>Vision & Mission</h2>
          </div>
          
          <div className="purpose-card">
            <h3 className="purpose-title"><span>+</span> Our Vision</h3>
            <p>To raise disciples of Jesus Christ who walk in faith, demonstrate God's love, and impact their generation through the power of the Holy Spirit.</p>
          </div>

          <div className="purpose-card">
            <h3 className="purpose-title"><span>+</span> Our Mission</h3>
            <ul className="mission-list">
              <li>Preach the Gospel of Jesus Christ</li>
              <li>Teach the Word of God</li>
              <li>Build strong families</li>
              <li>Equip believers for ministry</li>
              <li>Reach communities with God's love</li>
            </ul>
          </div>
        </div>

        {/* Right Column: History */}
        <div className="about-column">
          <div className="column-header">
            <h4>OUR HISTORY</h4>
            <h2>Our Story</h2>
          </div>
          
          <div className="story-content">
            <p>
              Grace Church of God was founded with a simple yet powerful vision — to create a community where people could encounter the living God, grow in His Word, and be equipped to make a difference in the world around them.
            </p>
            <p>
              Under the passionate leadership of <strong>Pastor Gore Pariyar</strong>, the church has grown into a thriving congregation that embraces people from all walks of life. We believe the church should be a place where everyone feels welcomed, valued, and transformed.
            </p>
            <p>
              From our Sunday worship gatherings to our weekday small groups and outreach programs, everything we do is rooted in a deep love for God and people.
            </p>
            <blockquote className="story-quote">
              "For we walk by faith, not by sight." <br/>
              <span>— 2 Corinthians 5:7</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. NEW: Leadership Team Section */}
      <section className="leadership-section">
        <div className="leadership-header">
          <h4>OUR LEADERSHIP</h4>
          <h2>Meet Our Team</h2>
          <p>Dedicated servants leading Grace Church of God with faith, compassion, and a heart for the community.</p>
        </div>

        <div className="leadership-grid">
          {/* Pastor Gore Pariyar's Card */}
          <div className="team-card">
            <div className="team-image-wrapper">
              <img src="/pastor.jpg" alt="Pastor Gore Pariyar" className="team-image" />
            </div>
            <div className="team-info">
              <h3>Pastor Gore Pariyar</h3>
              <p className="team-role">Senior Pastor</p>
              <p className="team-bio">Pastor Gore leads Grace Church of God with a passionate heart for discipleship, restoring families, and preaching the uncompromising Word of God to the community of Noida.</p>
            </div>
          </div>

          {/* Placeholder for future leader 1 */}
          <div className="team-card">
            <div className="team-image-wrapper placeholder-bg">
              <span>Photo Coming Soon</span>
            </div>
            <div className="team-info">
              <h3>Associate Pastor</h3>
              <p className="team-role">Pastoral Care</p>
              <p className="team-bio">Dedicated to serving the congregation through prayer, visitation, and overseeing our thriving small group ministries.</p>
            </div>
          </div>

          {/* Placeholder for future leader 2 */}
          <div className="team-card">
            <div className="team-image-wrapper placeholder-bg">
              <span>Photo Coming Soon</span>
            </div>
            <div className="team-info">
              <h3>Worship Leader</h3>
              <p className="team-role">Worship Ministry</p>
              <p className="team-bio">Leading the church family into the presence of God every Sunday through anointed music and heartfelt praise.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;