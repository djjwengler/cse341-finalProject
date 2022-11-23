const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const validator = require("validator");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_URI;
db.user = require("./user.js")(mongoose);
db.movie = require("./movie.js")(mongoose);
db.review = require("./review.js")(mongoose);
db.book = require("./book.js")(mongoose);
db.database = process.env.DB_NAME;

module.exports = db;
