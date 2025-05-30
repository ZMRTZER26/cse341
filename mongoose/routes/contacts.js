const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

const { contactValidationRules, validate } = require('../middleware/validateContact');

router.post('/', contactValidationRules, validate, contactsController.createContact);
router.put('/:id', contactValidationRules, validate, contactsController.updateContact);

router.get('/', contactsController.getContacts);
router.get('/:id', contactsController.getSingleContact);
router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);

module.exports = router;