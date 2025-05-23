const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const getImage = async (req, res) => {
    try {
        const imageId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('personal_project').collection('images').findOne({ _id: imageId });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Image not found' });
        }
    } catch (err) {
        console.error('Error fetching contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getImage };