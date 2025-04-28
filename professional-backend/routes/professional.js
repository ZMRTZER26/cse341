const express = require('express');
const router = express.Router();

// Sample professionals data
const professionals = [
  { id: 1, name: 'Alice', profession: 'Engineer' },
  { id: 2, name: 'Bob', profession: 'Doctor' },
];

// Route to get all professionals
router.get('/professionals', (req, res) => {
  res.json(professionals);
});

module.exports = router;
