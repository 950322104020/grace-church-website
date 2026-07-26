const express = require('express');
const router = express.Router();
const { submitMembership, getMemberships } = require('../controllers/membershipController');

router.post('/', submitMembership);
router.get('/', getMemberships);

module.exports = router;