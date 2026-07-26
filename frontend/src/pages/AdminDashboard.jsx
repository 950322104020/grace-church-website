import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // --- LOGIN STATE ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // --- DASHBOARD STATE ---
  const [activeTab, setActiveTab] = useState('prayers');
  const [prayers, setPrayers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [sermons, setSermons] = useState([]);
  const [events, setEvents] = useState([]);
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(false);

  // --- FORM STATES ---
  const [sermonForm, setSermonForm] = useState({ title: '', videoLink: '', date: '', description: '' });
  const [sermonStatus, setSermonStatus] = useState('');

  const [eventForm, setEventForm] = useState({ title: '', date: '', time: '', location: '', description: '' });
  const [eventStatus, setEventStatus] = useState('');

  // --- HANDLERS ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'Grace2026') {
      setIsAuthenticated(true);
      setLoginError('');
      fetchData(); 
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const prayerRes = await fetch('http://localhost:5000/api/prayer-requests');
      const prayerData = await prayerRes.json();
      if (prayerData.success) setPrayers(prayerData.data);

      const msgRes = await fetch('http://localhost:5000/api/contact');
      const msgData = await msgRes.json();
      if (msgData.success) setMessages(msgData.data);

      const sermonRes = await fetch('http://localhost:5000/api/sermons');
      const sermonData = await sermonRes.json();
      if (sermonData.success) setSermons(sermonData.data);

      const eventRes = await fetch('http://localhost:5000/api/events');
      const eventData = await eventRes.json();
      if (eventData.success) setEvents(eventData.data);

      const memRes = await fetch('http://localhost:5000/api/membership');
      const memData = await memRes.json();
      if (memData.success) setMemberships(memData.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSermonSubmit = async (e) => {
    e.preventDefault();
    setSermonStatus('Uploading...');
    try {
      const response = await fetch('http://localhost:5000/api/sermons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sermonForm),
      });
      if (response.ok) {
        setSermonStatus('Sermon published successfully!');
        setSermonForm({ title: '', videoLink: '', date: '', description: '' });
        fetchData();
      } else {
        setSermonStatus('Failed to publish sermon.');
      }
    } catch (error) {
      setSermonStatus('Server error. Try again.');
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    setEventStatus('Creating...');
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventForm),
      });
      if (response.ok) {
        setEventStatus('Event created successfully!');
        setEventForm({ title: '', date: '', time: '', location: '', description: '' });
        fetchData();
      } else {
        setEventStatus('Failed to create event.');
      }
    } catch (error) {
      setEventStatus('Server error. Try again.');
    }
  };

  // --- RENDER LOGIN ---
  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter Password" 
                value={passwordInput} 
                onChange={(e) => setPasswordInput(e.target.value)} 
                required 
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <button type="submit" className="btn-primary">Login</button>
            {loginError && <p className="error-text">{loginError}</p>}
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER DASHBOARD ---
  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Grace Church Admin Dashboard</h1>
        <p>Welcome back, Pastor Gore Pariyar.</p>
      </div>

      <div className="admin-tabs">
        <button className={activeTab === 'prayers' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('prayers')}>Prayer Requests</button>
        <button className={activeTab === 'messages' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('messages')}>Contact Messages</button>
        <button className={activeTab === 'memberships' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('memberships')}>Membership Apps</button>
        <button className={activeTab === 'sermons' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('sermons')}>Manage Sermons</button>
        <button className={activeTab === 'events' ? 'tab-btn active' : 'tab-btn'} onClick={() => setActiveTab('events')}>Manage Events</button>
      </div>

      <div className="admin-content">
        {/* PRAYERS TAB */}
        {activeTab === 'prayers' && (
          <div className="data-grid">
            {prayers.length === 0 ? <p>No prayer requests yet.</p> : null}
            {prayers.map((req) => (
              <div key={req._id} className="data-card">
                <h4>{req.name}</h4>
                <p className="data-date">{new Date(req.createdAt).toLocaleDateString()}</p>
                <div className="data-body"><p>{req.request}</p></div>
              </div>
            ))}
          </div>
        )}

        {/* MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="data-grid">
            {messages.length === 0 ? <p>No contact messages yet.</p> : null}
            {messages.map((msg) => (
              <div key={msg._id} className="data-card">
                <h4>{msg.name}</h4>
                <p className="data-email">{msg.email}</p>
                <div className="data-body"><p>{msg.message}</p></div>
              </div>
            ))}
          </div>
        )}

        {/* MEMBERSHIPS TAB */}
        {activeTab === 'memberships' && (
          <div className="data-grid">
            {memberships.length === 0 ? <p>No membership applications yet.</p> : null}
            {memberships.map((mem) => (
              <div key={mem._id} className="data-card">
                <h4>{mem.name}</h4>
                <p className="data-email">Email: {mem.email}</p>
                <p className="data-email">Phone: {mem.phone}</p>
                <p className="data-email">Address: {mem.address}</p>
                <p className="data-date">Applied: {new Date(mem.createdAt).toLocaleDateString()}</p>
                {mem.message && <div className="data-body"><p>{mem.message}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* SERMONS TAB */}
        {activeTab === 'sermons' && (
          <div className="manager-section">
            <div className="upload-card">
              <h3>Upload New Sermon</h3>
              <form onSubmit={handleSermonSubmit} className="manager-form">
                <input type="text" placeholder="Title" value={sermonForm.title} onChange={(e) => setSermonForm({...sermonForm, title: e.target.value})} required />
                <input type="url" placeholder="YouTube Link" value={sermonForm.videoLink} onChange={(e) => setSermonForm({...sermonForm, videoLink: e.target.value})} required />
                <input type="date" value={sermonForm.date} onChange={(e) => setSermonForm({...sermonForm, date: e.target.value})} required />
                <textarea placeholder="Description..." value={sermonForm.description} onChange={(e) => setSermonForm({...sermonForm, description: e.target.value})}></textarea>
                <button type="submit" className="btn-primary">Publish Sermon</button>
                {sermonStatus && <p className="status-msg">{sermonStatus}</p>}
              </form>
            </div>
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === 'events' && (
          <div className="manager-section">
            <div className="upload-card">
              <h3>Create New Event</h3>
              <form onSubmit={handleEventSubmit} className="manager-form">
                <input type="text" placeholder="Event Title" value={eventForm.title} onChange={(e) => setEventForm({...eventForm, title: e.target.value})} required />
                <input type="date" value={eventForm.date} onChange={(e) => setEventForm({...eventForm, date: e.target.value})} required />
                <textarea placeholder="Event Description" value={eventForm.description} onChange={(e) => setEventForm({...eventForm, description: e.target.value})}></textarea>
                <button type="submit" className="btn-primary">Create Event</button>
                {eventStatus && <p className="status-msg">{eventStatus}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;