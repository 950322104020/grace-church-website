import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Get backend base URL from Vercel environment variables or default to localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const AdminDashboard = () => {
  // 1. STATE VARIABLES FOR DATA
  const [sermons, setSermons] = useState([]);
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);

  // Active tab state
  const [activeTab, setActiveTab] = useState('members');

  // Form input states
  const [sermonForm, setSermonForm] = useState({ title: '', speaker: '', videoUrl: '', description: '' });
  const [eventForm, setEventForm] = useState({ title: '', date: '', location: '', description: '' });

  // 2. READ / FETCH DATA ON COMPONENT MOUNT
  useEffect(() => {
    fetchMembers();
    fetchSermons();
    fetchEvents();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/members`);
      setMembers(res.data);
    } catch (err) {
      console.error('Error fetching members:', err);
    }
  };

  const fetchSermons = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/sermons`);
      setSermons(res.data);
    } catch (err) {
      console.error('Error fetching sermons:', err);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/events`);
      setEvents(res.data);
    } catch (err) {
      console.error('Error fetching events:', err);
    }
  };

  // 3. ACTION / CREATE HANDLERS
  const handleAddSermon = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/sermons`, sermonForm);
      alert('Sermon added successfully!');
      setSermonForm({ title: '', speaker: '', videoUrl: '', description: '' });
      fetchSermons(); // Refresh list
    } catch (err) {
      alert('Failed to add sermon');
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/events`, eventForm);
      alert('Event added successfully!');
      setEventForm({ title: '', date: '', location: '', description: '' });
      fetchEvents(); // Refresh list
    } catch (err) {
      alert('Failed to add event');
    }
  };

  // 4. ACTION / DELETE HANDLERS
  const handleDeleteMember = async (id) => {
    if (window.confirm('Are you sure you want to delete this member registration?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/members/${id}`);
        fetchMembers();
      } catch (err) {
        alert('Failed to delete member');
      }
    }
  };

  const handleDeleteSermon = async (id) => {
    if (window.confirm('Are you sure you want to delete this sermon?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/sermons/${id}`);
        fetchSermons();
      } catch (err) {
        alert('Failed to delete sermon');
      }
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`${API_BASE_URL}/api/events/${id}`);
        fetchEvents();
      } catch (err) {
        alert('Failed to delete event');
      }
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>Grace Church Admin Dashboard</h2>

      {/* NAVIGATION TABS */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          onClick={() => setActiveTab('members')}
          style={{ fontWeight: activeTab === 'members' ? 'bold' : 'normal' }}
        >
          Members ({members.length})
        </button>
        <button 
          onClick={() => setActiveTab('sermons')}
          style={{ fontWeight: activeTab === 'sermons' ? 'bold' : 'normal' }}
        >
          Sermons ({sermons.length})
        </button>
        <button 
          onClick={() => setActiveTab('events')}
          style={{ fontWeight: activeTab === 'events' ? 'bold' : 'normal' }}
        >
          Events ({events.length})
        </button>
      </div>

      {/* MEMBERS TAB */}
      {activeTab === 'members' && (
        <div>
          <h3>Registered Members</h3>
          {members.length === 0 ? <p>No registered members found.</p> : (
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member._id}>
                    <td>{member.fullName || member.name}</td>
                    <td>{member.email}</td>
                    <td>{member.phone}</td>
                    <td>
                      <button onClick={() => handleDeleteMember(member._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* SERMONS TAB */}
      {activeTab === 'sermons' && (
        <div>
          <h3>Add New Sermon</h3>
          <form onSubmit={handleAddSermon} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', maxWidth: '400px' }}>
            <input 
              placeholder="Sermon Title" 
              value={sermonForm.title} 
              onChange={(e) => setSermonForm({...sermonForm, title: e.target.value})} 
              required 
            />
            <input 
              placeholder="Speaker / Pastor" 
              value={sermonForm.speaker} 
              onChange={(e) => setSermonForm({...sermonForm, speaker: e.target.value})} 
              required 
            />
            <input 
              placeholder="YouTube Video Link" 
              value={sermonForm.videoUrl} 
              onChange={(e) => setSermonForm({...sermonForm, videoUrl: e.target.value})} 
            />
            <textarea 
              placeholder="Description" 
              value={sermonForm.description} 
              onChange={(e) => setSermonForm({...sermonForm, description: e.target.value})} 
            />
            <button type="submit">Publish Sermon</button>
          </form>

          <h3>All Sermons</h3>
          <ul>
            {sermons.map((sermon) => (
              <li key={sermon._id} style={{ marginBottom: '1rem' }}>
                <strong>{sermon.title}</strong> — {sermon.speaker}{' '}
                <button onClick={() => handleDeleteSermon(sermon._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* EVENTS TAB */}
      {activeTab === 'events' && (
        <div>
          <h3>Add New Event</h3>
          <form onSubmit={handleAddEvent} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', maxWidth: '400px' }}>
            <input 
              placeholder="Event Title" 
              value={eventForm.title} 
              onChange={(e) => setEventForm({...eventForm, title: e.target.value})} 
              required 
            />
            <input 
              type="date" 
              value={eventForm.date} 
              onChange={(e) => setEventForm({...eventForm, date: e.target.value})} 
              required 
            />
            <input 
              placeholder="Location" 
              value={eventForm.location} 
              onChange={(e) => setEventForm({...eventForm, location: e.target.value})} 
            />
            <textarea 
              placeholder="Description" 
              value={eventForm.description} 
              onChange={(e) => setEventForm({...eventForm, description: e.target.value})} 
            />
            <button type="submit">Create Event</button>
          </form>

          <h3>Upcoming Events</h3>
          <ul>
            {events.map((event) => (
              <li key={event._id} style={{ marginBottom: '1rem' }}>
                <strong>{event.title}</strong> ({event.date}) — {event.location}{' '}
                <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;