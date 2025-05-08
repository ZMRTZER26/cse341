const mongodb = require('../db/connect');

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('assignments').collection('contacts').find();
        const data = await result.toArray();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching data:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a contact by ID
const getContactById = async (req, res) => {
    const { id } = req.params; // Get the contactId from the URL parameter

    try {
        const result = await mongodb.getDb().db('assignments').collection('contacts').findOne({ _id: new mongodb.ObjectId(id) });
        
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Contact not found.' });
        }
    } catch (err) {
        console.error('Error fetching contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new contact (POST)
const createContact = async (req, res) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newContact = { firstName, lastName, email, favoriteColor, birthday };
        const result = await mongodb.getDb().db('assignments').collection('contacts').insertOne(newContact);
        
        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        console.error('Error creating contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a contact by ID (PUT)
const updateContact = async (req, res) => {
    const { id } = req.params; // Get the contactId from the URL parameter
    const updatedData = req.body;

    try {
        const result = await mongodb.getDb().db('assignments').collection('contacts').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: updatedData }
        );
        
        if (result.modifiedCount > 0) {
            res.status(204).send(); // No content to send
        } else {
            res.status(404).json({ message: 'Contact not found or no changes made.' });
        }
    } catch (err) {
        console.error('Error updating contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a contact by ID (DELETE)
const deleteContact = async (req, res) => {
    const { id } = req.params; // Get the contactId from the URL parameter

    try {
        const result = await mongodb.getDb().db('assignments').collection('contacts').deleteOne(
            { _id: new ObjectId(req.params.id) }
        );
        
        if (result.deletedCount > 0) {
            res.status(200).json({ message: 'Contact deleted successfully.' });
        } else {
            res.status(404).json({ message: 'Contact not found.' });
        }
    } catch (err) {
        console.error('Error deleting contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getContacts, getContactById, createContact, updateContact, deleteContact };
