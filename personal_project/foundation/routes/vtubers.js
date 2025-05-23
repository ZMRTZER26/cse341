const express = require('express');
const router = express.Router();
const vtubersController = require('../controllers/vtubers');

router.get('/', vtubersController.getVtubers);
router.get('/:id', vtubersController.getSingleVtuber);
router.post('/', vtubersController.createVtuber);
router.put('/:id', vtubersController.updateVtuber);
router.delete('/:id', vtubersController.deleteVtuber);

module.exports = router;