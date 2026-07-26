import React from 'react';
import './Ministries.css';

const Ministries = () => {
  return (
    <div className="ministries-page">
      <div className="ministries-hero">
        <h1>Our Ministries</h1>
        <p>Find your place to serve, grow, and connect within the Grace Church family.</p>
      </div>

      <div className="ministries-container">
        <div className="ministry-card">
          <div className="ministry-image placeholder-kids"></div>
          <div className="ministry-content">
            <h2>Children's Ministry</h2>
            <p>Equipping the next generation to know, love, and serve Jesus. We provide a safe, fun, and engaging environment for kids to learn the Bible at their level during our Sunday services.</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>

        <div className="ministry-card reverse">
          <div className="ministry-image placeholder-youth"></div>
          <div className="ministry-content">
            <h2>Youth Fellowship</h2>
            <p>Empowering teenagers to live boldly for Christ. Our youth ministry meets weekly for worship, honest discussions, and community building, helping students navigate life with faith.</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>

        <div className="ministry-card">
          <div className="ministry-image placeholder-worship"></div>
          <div className="ministry-content">
            <h2>Worship & Creative Arts</h2>
            <p>Leading the congregation into the presence of God through music, media, and technical arts. If you have a gift for singing, playing an instrument, or audio/visual production, there is a place for you here.</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
        
        <div className="ministry-card reverse">
          <div className="ministry-image placeholder-outreach"></div>
          <div className="ministry-content">
            <h2>Community Outreach</h2>
            <p>Taking the love of Jesus beyond the walls of our church. We actively serve the Noida community through food drives, local evangelism, and supporting families in need.</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;