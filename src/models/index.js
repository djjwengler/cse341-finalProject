const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.user = require("./user")(mongoose);
db.movie = require("./movie")(mongoose);
db.review = require("./review")(mongoose);
db.book = require("./book")(mongoose);

module.exports = db;
