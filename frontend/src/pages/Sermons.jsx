import React, { useState, useEffect } from 'react';
import './Sermons.css';

// Helper to extract YouTube video ID from normal URLs, Shorts, or youtu.be links
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Helper to get YouTube thumbnail image URL
const getYouTubeThumbnail = (url) => {
  const videoId = getYouTubeId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : '/church-family.jpg';
};

const DEFAULT_SERMONS = [
  {
    _id: 'default-1',
    title: 'Grace & Truth in Christ',
    speaker: 'Pastor John Pariyar',
    date: new Date().toISOString(),
    description: 'A powerful message of hope, transformation, and victory in Jesus Christ.',
    videoLink: 'https://youtube.com/shorts/4cZOwMqnW9g?si=fQFgTJMNx9ey-XJo'
  },
  {
    _id: 'default-2',
    title: 'The Joy Of The Lord Is My Strength',
    speaker: 'Pastor John Pariyar',
    date: new Date().toISOString(),
    description: 'A powerful message of hope, transformation, and victory in Jesus Christ.',
    videoLink: 'https://youtube.com/shorts/8gbA6cXHH4o?si=lRWxScdkuaH2AcGp'
  }
];

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/sermons');
        const data = await response.json();
        if (data.success && data.data && data.data.length > 0) {
          setSermons(data.data);
        } else {
          // If backend returns empty list, show default sermons
          setSermons(DEFAULT_SERMONS);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sermons, loading fallback data:", error);
        // Fallback to default sermons if backend is not running
        setSermons(DEFAULT_SERMONS);
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
          <h3 style={{ textAlign: 'center' }}>Loading sermons...</h3>
        ) : sermons.length === 0 ? (
          <h3 style={{ textAlign: 'center' }}>New sermons coming soon!</h3>
        ) : (
          <div className="sermons-grid">
            {sermons.map((sermon) => {
              const videoUrl = sermon.videoLink || sermon.videoUrl || '';
              const thumbnailUrl = getYouTubeThumbnail(videoUrl);

              return (
                <div key={sermon._id} className="sermon-card-public">
                  <a
                    href={videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="sermon-thumbnail"
                    aria-label={`Watch ${sermon.title}`}
                  >
                    <img
                      src={thumbnailUrl}
                      alt={sermon.title || "Sermon thumbnail"}
                    />
                    <div className="play-overlay">▶</div>
                  </a>
                  <div className="sermon-info">
                    <p className="sermon-date">
                      {sermon.date
                        ? new Date(sermon.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                        : 'Recent'}
                    </p>
                    <h2>{sermon.title}</h2>
                    {sermon.speaker && <p className="sermon-speaker"><strong>Speaker:</strong> {sermon.speaker}</p>}
                    <p className="sermon-desc">{sermon.description}</p>
                    <a href={videoUrl} target="_blank" rel="noreferrer" className="btn-primary">
                      Watch Message
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermons;