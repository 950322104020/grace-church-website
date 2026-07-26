const express = require('express');
const router = express.Router();
const { submitContactMessage, getContactMessages } = require('../controllers/contactController');

router.post('/', submitContactMessage);
router.get('/', getContactMessages); // <-- NEW GET ROUTE

module.exports = router;