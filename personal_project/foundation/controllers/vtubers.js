const db = require('../models');
const Vtuber = db.vtuber;

const getVtubers = async (req, res) => {
  try {
    const vtubers = await Vtuber.find();
    res.status(200).json(vtubers);
  } catch (err) {
    console.error('Error fetching vtubers:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const getSingleVtuber = async (req, res) => {
  try {
    const vtuber = await Vtuber.findById(req.params.id);
    if (!vtuber) return res.status(404).json({ message: 'Vtuber not found' });
    res.status(200).json(vtuber);
  } catch (err) {
    console.error('Error fetching vtuber:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const createVtuber = async (req, res) => {
  try {
    const vtuber = new Vtuber(req.body);
    const saved = await vtuber.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error creating vtuber:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateVtuber = async (req, res) => {
  try {
    const updated = await Vtuber.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Vtuber not found' });
    res.status(200).json(updated);
  } catch (err) {
    console.error('Error updating vtuber:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteVtuber = async (req, res) => {
  try {
    const result = await Vtuber.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Vtuber not found' });
    res.status(200).json({ message: 'Vtuber deleted' });
  } catch (err) {
    console.error('Error deleting vtuber:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getVtubers, getSingleVtuber, createVtuber, updateVtuber, deleteVtuber };
