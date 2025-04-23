const express = require('express');
const router = express.Router();
const { getName } = require('../controllers/nameController');

// Route for the home page
router.get('/', getName);

module.exports = router;
