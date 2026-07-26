const mongoose = require('mongoose');

const prayerRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false, // Optional for follow-up
  },
  request: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('PrayerRequest', prayerRequestSchema);