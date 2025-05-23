const mongodb = require('../db/connect');

const getVtubers = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('personal_project').collection('vtubers').find();
        const data = await result.toArray();
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching dta:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const { ObjectId } = require('mongodb');

const getSingleVtuber = async (req, res) => {
    try {
        const vtuberId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('personal_project').collection('vtubers').findOne({ _id: vtuberId });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Vtuber not found' });
        }
    } catch (err) {
        console.error('Error fetching contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const createVtuber = async (req, res) => {
    try {
        const { name, debut, agency, bio, language, status, channel } = req.body;

        if (!name || !debut || !agency || !bio || !language || !status || !channel) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newVtuber = {
            name,
            debut,
            agency,
            bio,
            language,
            status,
            channel,
        };

        const result = await mongodb.getDb().db('personal_project').collection('vtubers').insertOne(newVtuber);

        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        console.error('Error creating contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const updateVtuber = async (req, res) => {
    try {
        const vtuberId = new ObjectId(req.params.id);
        const updatedVtuber = {
            name: req.body.name,
            debut: req.body.debut,
            agency: req.body.agency,
            bio: req.body.bio,
            language: req.body.language,
            status: req.body.status,
            channel: req.body.channel
        };

        const result = await mongodb.getDb().db('personal_project').collection('vtubers').updateOne(
            { _id: vtuberId },
            { $set: updatedVtuber }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'Vtuber not found' });
        }

        res.status(204).send();
    } catch (err) {
        console.error('Error updating contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteVtuber = async (req, res) => {
    try {
        const vtuberId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('personal_project').collection('vtubers').deleteOne({ _id: vtuberId });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Vtuber successfully deleted' });
        } else {
            res.status(404).json({ message: 'Vtuber not found' });
        }
    } catch (err) {
        console.error('Error deleting contact:', err.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getVtubers, getSingleVtuber, createVtuber, updateVtuber, deleteVtuber };