const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/images');
const { validateImage } = require('../middleware/validate');

// #swagger.tags = ['Images']
// #swagger.description = 'Get all images'
router.get('/', imagesController.getImages);

// #swagger.tags = ['Images']
// #swagger.description = 'Get a single image by ID'
router.get('/:id', imagesController.getSingleImage);

// #swagger.tags = ['Images']
// #swagger.description = 'Create a new image entry'
router.post('/', validateImage, imagesController.linkImage);

// #swagger.tags = ['Images']
// #swagger.description = 'Update an image by ID'
router.put('/:id', validateImage, imagesController.updateImage);

// #swagger.tags = ['Images']
// #swagger.description = 'Delete an image by ID'
router.delete('/:id', imagesController.deleteImage);

module.exports = router;
