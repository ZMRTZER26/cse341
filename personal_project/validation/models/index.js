const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.theme = require("./vtubersModel.js")(mongoose);
db.user = require("./imagesModel.js")(mongoose);

module.exports = db;
