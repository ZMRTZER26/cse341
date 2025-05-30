const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true, trim: true },
  artist: { type: String, required: true, trim: true },
  vtuberName: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('Images', imageSchema);