const express = require('express');
const router = express.Router();
const { submitPrayerRequest, getPrayerRequests } = require('../controllers/prayerController');

router.post('/', submitPrayerRequest);
router.get('/', getPrayerRequests); // <-- NEW GET ROUTE

module.exports = router;