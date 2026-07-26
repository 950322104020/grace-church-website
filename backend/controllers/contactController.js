const ContactMessage = require('../models/ContactMessage');

// @desc    Submit a new contact message
// @route   POST /api/contact
const submitContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await ContactMessage.create({ name, email, message });
    res.status(201).json({ success: true, data: newMessage, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// NEW: @desc    Get all contact messages
// NEW: @route   GET /api/contact
const getContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  submitContactMessage,
  getContactMessages // <-- Don't forget to export the new function!
};