const routes = require("express").Router();
const mediaController = require("../controllers/movies");

//gets all media
routes.get("/", mediaController.getAll);

//gets one media
routes.get("/:id", mediaController.getOneById);

//gets one media by title
routes.get("/:name");

//gets one media by genre
routes.get("/:genre");

//gets one media by author
routes.get("/:rating");

//creates one media
routes.post("/", mediaController.create);

//updates one media identified by id
routes.put("/:id");

//updates one media location
routes.put("/:id/:location");

//deletes one media
routes.delete("/:id");

module.exports = routes;
