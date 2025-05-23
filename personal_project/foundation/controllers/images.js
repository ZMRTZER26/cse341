const db = require('../models');
const Image = db.image = require('./images.js')(mongoose);

const getImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id).populate('vtuberId');
    if (!image) return res.status(404).json({ message: 'Image not found' });
    res.status(200).json(image);
  } catch (err) {
    console.error('Error fetching image:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getImage };
