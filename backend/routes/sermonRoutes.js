const express = require('express');
const router = express.Router();
const { addSermon, getSermons } = require('../controllers/sermonController');

router.post('/', addSermon);
router.get('/', getSermons);

module.exports = router;