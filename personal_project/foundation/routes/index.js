const express = require('express');
const router = express.Router();

router.use('/vtubers', require('./vtubers'))

module.exports = router;