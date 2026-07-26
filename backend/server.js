const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const prayerRoutes = require('./routes/prayerRoutes');
const sermonRoutes = require('./routes/sermonRoutes');
const eventRoutes = require('./routes/eventRoutes');
const membershipRoutes = require('./routes/membershipRoutes');
require('dotenv').config();
const dns=require('dns');
const app = express();
//change the dns
dns.setServers(["1.1.1.1", "8.8.8.8"]);
// Middleware
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/prayer-requests', prayerRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/sermons', sermonRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/membership', membershipRoutes);

// Database Connection Function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB successfully connected for Grace Church!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Connect to Database, then start the server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running beautifully on port ${PORT}`);
  });
});