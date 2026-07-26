// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Beliefs from './pages/Beliefs';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Give from './pages/Give';
import Contact from './pages/Contact';
import PrayerRequest from './pages/PrayerRequest';
import AdminDashboard from './pages/AdminDashboard';
import Membership from './pages/Membership';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/beliefs" element={<Beliefs />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/membership" element={<Membership />} />
          </Routes>
        </main>
        <Footer/>
       
      </div>
    </Router>
  );
}

export default App;