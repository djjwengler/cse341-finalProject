const routes = require("express").Router();
const booksController = require("../controllers/books");

//retrieves all books
routes.get("/book");

//retrieves one book by ID
routes.get("/book/:id");

//retrieves one book by name
routes.get("/book/findByAuthor/:name");

//retrieves one book by genre
routes.get("/book/findByGenre/:genre");

//updates one day by ID
routes.put("/book/:id");

//updates one day by ID
routes.put("/book/:id/location/:location");

//deletes one day by ID
routes.delete("/book/:id");

//creates one day
routes.post("/book");

module.exports = routes;
