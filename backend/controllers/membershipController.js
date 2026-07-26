const Membership = require('../models/Membership');

// @desc    Submit a new membership application
// @route   POST /api/membership
const submitMembership = async (req, res) => {
  try {
    const { name, email, phone, address, message } = req.body;
    const newMember = await Membership.create({ name, email, phone, address, message });
    res.status(201).json({ success: true, data: newMember, message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error saving membership request:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Get all membership requests
// @route   GET /api/membership
const getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: memberships });
  } catch (error) {
    console.error('Error fetching memberships:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { submitMembership, getMemberships };