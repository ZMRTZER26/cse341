const mongodb = require('../db/connect');

const getContacts = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('assignments').collection('contacts').find();
        const data = await result.toArray();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching dta:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const { ObjectId } = require('mongodb');

const getSingleContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('assignments').collection('contacts').findOne({ _id: contactId });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (err) {
        console.error('Error fetching contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContact = {
            firstName,
            lastName,
            email,
            favoriteColor,
            birthday
        };

        const result = await mongodb.getDb().db('assignments').collection('contacts').insertOne(newContact);

        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        console.error('Error creating contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const updatedContact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };

        const result = await mongodb.getDb().db('assignments').collection('contacts').updateOne(
            { _id: contactId },
            { $set: updatedContact }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(204).send(); // Successfully updated, no content to return
    } catch (err) {
        console.error('Error updating contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('assignments').collection('contacts').deleteOne({ _id: contactId });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Contact successfully deleted' });
        } else {
            res.status(404).json({ message: 'Contact not found' });
        }
    } catch (err) {
        console.error('Error deleting contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getContacts, getSingleContact, createContact, updateContact, deleteContact };