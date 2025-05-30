const mongoose = require('mongoose');

const vtuberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  debut: { type: String, required: true },
  agency: { type: String, required: true },
  bio: { type: String, required: true },
  language: { type: String, required: true },
  status: { type: String, required: true },
  channel: { type: String, required: true }
});

module.exports = mongoose.model('Vtuber', vtuberSchema);
