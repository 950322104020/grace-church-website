import React, { useState, useEffect } from 'react';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="events-page">
      <div className="events-hero">
        <h1>Upcoming Events</h1>
        <p>Join us as we gather for worship, fellowship, and community outreach.</p>
      </div>

      <div className="events-container">
        {loading ? (
          <h3 style={{ textAlign: 'center', padding: '3rem' }}>Loading events...</h3>
        ) : events.length === 0 ? (
          <div className="no-events">
            <h3>More Events Coming Soon!</h3>
            <p>Check back later for updates on our church calendar.</p>
          </div>
        ) : (
          <div className="events-list">
            {events.map((event) => (
              <div key={event._id} className="event-card">
                <div className="event-date-box">
                  <span className="event-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="event-day">{new Date(event.date).getDate()}</span>
                </div>
                <div className="event-details">
                  <h2>{event.title}</h2>
                  <div className="event-meta">
                    <span>🕒 {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;