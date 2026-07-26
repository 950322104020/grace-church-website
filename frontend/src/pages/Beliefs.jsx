import React from 'react';
import './Beliefs.css';

const Beliefs = () => {
  return (
    <div className="beliefs-page">
      <div className="beliefs-hero">
        <h1>Our Beliefs</h1>
        <p>The core foundational truths that guide our faith, our community, and our lives.</p>
      </div>

      <div className="beliefs-container">
        <div className="beliefs-grid">
          <div className="belief-card">
            <h2>The Bible</h2>
            <p>We believe the Bible is the inspired, infallible, and authoritative Word of God. It is our ultimate guide for faith and daily living.</p>
          </div>
          
          <div className="belief-card">
            <h2>God</h2>
            <p>We believe there is one God, eternally existent in three persons: Father, Son, and Holy Spirit. He is the creator of all things.</p>
          </div>

          <div className="belief-card">
            <h2>Jesus Christ</h2>
            <p>We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His atoning death, His bodily resurrection, and His ascension to the right hand of the Father.</p>
          </div>

          <div className="belief-card">
            <h2>The Holy Spirit</h2>
            <p>We believe in the present ministry of the Holy Spirit, whose indwelling enables the Christian to live a godly life and empowers believers for ministry.</p>
          </div>

          <div className="belief-card">
            <h2>Salvation</h2>
            <p>We believe that salvation is a free gift from God, received by grace through faith in Jesus Christ, and is the only way to be reconciled to God.</p>
          </div>

          <div className="belief-card">
            <h2>The Church</h2>
            <p>We believe in the spiritual unity of believers in our Lord Jesus Christ, and that the church is the body of Christ on earth, called to spread His love and truth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;