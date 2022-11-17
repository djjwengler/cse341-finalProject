const routes = require("express").Router();
const booksController = require("../controllers/books");

//retrieves all books
routes.get("/", booksController.getAll);

//retrieves one book by ID
routes.get("/:id", booksController.getOneById);

//retrieves one book by title
routes.get("/title/:title", booksController.getOneByTitle);

//retrieves one book by author
routes.get("/author/:author", booksController.getByAuthor);

//retrieves one book by genre
routes.get("/genre/:genre", booksController.getByGenre);

//updates one book by ID
routes.put("/:id", booksController.update);

//updates one book by ID
routes.put("/:id/location/:location");

//deletes one book by ID
routes.delete("/:id", booksController.deleteOne);

//creates one book
routes.post("/", booksController.create);

module.exports = routes;
