const routes = require("express").Router();
const booksController = require("../controllers/books");

//retrieves all books
routes.get("/");

//retrieves one book by ID
routes.get("/:id");

//retrieves one book by name
routes.get("/findByAuthor/:name");

//retrieves one book by genre
routes.get("/findByGenre/:genre");

//updates one day by ID
routes.put("/:id");

//updates one day by ID
routes.put("/:id/location/:location");

//deletes one day by ID
routes.delete("/:id");

//creates one day
routes.post("/");

module.exports = routes;
