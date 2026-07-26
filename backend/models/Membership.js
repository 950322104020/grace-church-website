const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String }, // Optional field for their testimony/background
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Membership', membershipSchema);