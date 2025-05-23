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
    console.error('Error fetching image:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const linkImage = async (req, res) => {
  try {
    const { url, artist, vtuberId} = req.body;

    if (!url || !artist || !vtuberId) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newImage = {
      url,
      artist,
      vtuberId,
    };

    const result = await mongodb.getDb().db('personal_project').collection('images').insertOne(newImage);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    console.error('Error linking image:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getImage, linkImage };
