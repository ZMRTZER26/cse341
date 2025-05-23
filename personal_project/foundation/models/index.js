const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.vtuber = require('./vtubers.js')(mongoose);
db.image = require('./images.js')(mongoose);

module.exports = db;
