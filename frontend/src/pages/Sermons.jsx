import React, { useState, useEffect } from 'react';
import './Sermons.css';

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sermons');
        const data = await response.json();
        if (data.success) {
          setSermons(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sermons:", error);
        setLoading(false);
      }
    };
    fetchSermons();
  }, []);

  return (
    <div className="sermons-page">
      <div className="sermons-header">
        <h1>Latest Messages</h1>
        <p>Catch up on the latest teachings from Pastor Gore Pariyar and grow in the Word of God.</p>
      </div>

      <div className="sermons-container">
        {loading ? (
          <h3 style={{textAlign: 'center'}}>Loading sermons...</h3>
        ) : sermons.length === 0 ? (
          <h3 style={{textAlign: 'center'}}>New sermons coming soon!</h3>
        ) : (
          <div className="sermons-grid">
            {sermons.map((sermon) => (
              <div key={sermon._id} className="sermon-card-public">
                <div className="sermon-thumbnail">
                  {/* Shows a placeholder image for the video */}
                  <img src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sermon thumbnail" />
                  <div className="play-overlay">▶</div>
                </div>
                <div className="sermon-info">
                  <p className="sermon-date">{new Date(sermon.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <h2>{sermon.title}</h2>
                  <p className="sermon-desc">{sermon.description}</p>
                  <a href={sermon.videoLink} target="_blank" rel="noreferrer" className="btn-primary">Watch Message</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermons;