const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Path to user.json
const dataPath = path.join(__dirname, '..', 'user.json');

// Helper function to read JSON file
function readData() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

// GET all professionals
router.get('/professionals', (req, res) => {
  const professionals = readData();
  res.json(professionals);
});

// GET a professional by ID
router.get('/professionals/:id', (req, res) => {
  const professionals = readData();
  const id = parseInt(req.params.id);
  const professional = professionals.find(p => p.id === id);

  if (professional) {
    res.json(professional);
  } else {
    res.status(404).json({ message: 'Professional not found' });
  }
});

// POST a new professional
router.post('/professionals', (req, res) => {
  const professionals = readData();
  const newProfessional = req.body;

  professionals.push(newProfessional);

  fs.writeFileSync(dataPath, JSON.stringify(professionals, null, 2));

  res.status(201).json(newProfessional);
});

module.exports = router;
