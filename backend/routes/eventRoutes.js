const express = require('express');
const router = express.Router();
const { addEvent, getEvents } = require('../controllers/eventController');

router.post('/', addEvent);
router.get('/', getEvents);

module.exports = router;