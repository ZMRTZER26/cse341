const mongodb = require('../db/connect');

const getContacts = async (requestAnimationFrame, res) => {
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

module.exports = { getContacts, getSingleContact };