const express = require('express');
const router = express.Router();

router.use('/vtubers', require('./vtubers'));
router.use('/images', require('./images'));

module.exports = router;
