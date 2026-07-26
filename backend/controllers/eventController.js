const Event = require('../models/Event');

// @desc    Add a new event
// @route   POST /api/events
const addEvent = async (req, res) => {
  try {
    const { title, date, time, location, description } = req.body;
    const newEvent = await Event.create({ title, date, time, location, description });
    res.status(201).json({ success: true, data: newEvent, message: 'Event added successfully' });
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Get all events
// @route   GET /api/events
const getEvents = async (req, res) => {
  try {
    // Sort by date ascending (closest upcoming events first)
    const events = await Event.find().sort({ date: 1 }); 
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  addEvent,
  getEvents
};