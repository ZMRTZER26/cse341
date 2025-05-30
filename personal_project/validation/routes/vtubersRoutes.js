const express = require('express');
const router = express.Router();
const vtubersController = require('../controllers/vtubers');
const { validateVtuber } = require('../middleware/validate');

// #swagger.tags = ['Vtubers']
// #swagger.description = 'Get all Vtubers'
router.get('/', vtubersController.getVtubers);

// #swagger.tags = ['Vtubers']
// #swagger.description = 'Get a single Vtuber by ID'
router.get('/:id', vtubersController.getSingleVtuber);

// #swagger.tags = ['Vtubers']
// #swagger.description = 'Create a new Vtuber'
router.post('/', validateVtuber, vtubersController.createVtuber);

// #swagger.tags = ['Vtubers']
// #swagger.description = 'Update a Vtuber by ID'
router.put('/:id', validateVtuber, vtubersController.updateVtuber);

// #swagger.tags = ['Vtubers']
// #swagger.description = 'Delete a Vtuber by ID'
router.delete('/:id', vtubersController.deleteVtuber);

module.exports = router;
