const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contacts');

// GET all contacts
router.get('/', contactsController.getContacts);

// GET a contact by ID
router.get('/:id', contactsController.getContactById);

// POST a new contact
router.post('/', contactsController.createContact);

// PUT (update) a contact by ID
router.put('/:id', contactsController.updateContact);

// DELETE a contact by ID
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
