const routes = require("express").Router();
const books = require("./books");
const movies = require("./movies");
const reviews = require("./reviews");
const users = require("./users");

routes.use("/", require("./swagger"));
routes.use("/books", books);
routes.use("/movies", movies);
routes.use("/users", users);
routes.use("/reviews", reviews);
routes.use("/", () => {});

module.exports = routes;
