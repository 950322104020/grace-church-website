const PrayerRequest = require('../models/PrayerRequest');

// @desc    Submit a new prayer request
// @route   POST /api/prayer-requests
const submitPrayerRequest = async (req, res) => {
  try {
    const { name, email, request } = req.body;
    const newRequest = await PrayerRequest.create({ name, email, request });
    res.status(201).json({ success: true, data: newRequest, message: 'Prayer request submitted successfully' });
  } catch (error) {
    console.error('Error saving prayer request:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// NEW: @desc    Get all prayer requests
// NEW: @route   GET /api/prayer-requests
const getPrayerRequests = async (req, res) => {
  try {
    // .find() gets all records, .sort({ createdAt: -1 }) puts the newest ones first
    const requests = await PrayerRequest.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error('Error fetching prayer requests:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  submitPrayerRequest,
  getPrayerRequests // <-- Don't forget to export the new function!
};