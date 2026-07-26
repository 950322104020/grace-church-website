import React from 'react';
import './Give.css';

const Give = () => {
  return (
    <div className="give-page">
      <div className="give-hero">
        <h1>Worship Through Giving</h1>
        <p>Your generosity helps us continue the work of the ministry and impact our community.</p>
      </div>

      <div className="give-container">
        <div className="give-methods-grid">
          
          <div className="give-method-card">
            <div className="icon-wrapper">💻</div>
            <h2>Give Online</h2>
            <p>Securely give a one-time or recurring gift using our online portal.</p>
            <button className="btn-primary">Donate Now</button>
          </div>

          <div className="give-method-card">
            <div className="icon-wrapper">🏦</div>
            <h2>Bank Transfer</h2>
            <p>You can transfer directly to the church account using these details:</p>
            <div className="bank-details">
              <p><strong>Bank:</strong> Example Bank Name</p>
              <p><strong>Account Name:</strong> Grace Church of God</p>
              <p><strong>Account No:</strong> 1234567890</p>
              <p><strong>IFSC:</strong> EXMP0001234</p>
            </div>
          </div>

          <div className="give-method-card">
            <div className="icon-wrapper">📍</div>
            <h2>In Person</h2>
            <p>Give during our Sunday worship service at our physical location.</p>
            <div className="address-details">
              <p>Village Bhooda, Sector 81</p>
              <p>Noida Phase 2, UP 201305</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Give;