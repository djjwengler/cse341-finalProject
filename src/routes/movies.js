const routes = require("express").Router();
const movieController = require("../controllers/movies");

//gets all media
routes.get("/", movieController.getAll);

//gets one media
routes.get("/:id", movieController.getOneById);

//gets one media by title
routes.get("/title/:title", movieController.getOneByTitle);

//gets one media by genre
routes.get("/genre/:genre", movieController.getByGenre);

//gets one media by author
routes.get("/rating/:rating", movieController.getByRating);

//creates one media
routes.post("/", movieController.create);

//updates one media identified by id
routes.put("/:id", movieController.update);

//updates one media location
routes.put("/:id/location/:location");

//deletes one media
routes.delete("/:id", movieController.deleteOne);

module.exports = routes;
