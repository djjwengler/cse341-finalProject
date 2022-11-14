const routes = require("express").Router();
const mediaController = require("../controllers/movies");

//gets all media
routes.get("/movie");

//gets one media
routes.get("/movie/:id");

//gets one media by title
routes.get("/movie/:name");

//gets one media by genre
routes.get("/movie/:genre");

//gets one media by author
routes.get("/movie/:rating");

//creates one media
routes.post("/movie");

//updates one media identified by id
routes.put("/movie/:id");

//updates one media location
routes.put("/movie/:id/:location");

//deletes one media
routes.delete("/movie/:id");

module.exports = routes;
