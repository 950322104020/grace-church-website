const Sermon = require('../models/Sermon');

// @desc    Add a new sermon
// @route   POST /api/sermons
const addSermon = async (req, res) => {
  try {
    const { title, videoLink, date, description } = req.body;
    const newSermon = await Sermon.create({ title, videoLink, date, description });
    res.status(201).json({ success: true, data: newSermon, message: 'Sermon added successfully' });
  } catch (error) {
    console.error('Error saving sermon:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Get all sermons
// @route   GET /api/sermons
const getSermons = async (req, res) => {
  try {
    const sermons = await Sermon.find().sort({ date: -1 }); // Newest sermons first
    res.status(200).json({ success: true, data: sermons });
  } catch (error) {
    console.error('Error fetching sermons:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  addSermon,
  getSermons
};