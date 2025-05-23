const express = require('express');
const router = express.Router();
const vtubersController = require('../controllers/images');

router.get('/:id', vtubersController.getImage);


module.exports = router;