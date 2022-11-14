const routes = require("express").Router();
const reviewsController = require("../controllers/reviews");

//retrieves all reviews
routes.get("/review");

//retrieves one review by ID
routes.get("/review/:id");

//updates one review by ID
routes.put("/review/:id");

//deletes one review by ID
routes.delete("/review/:id");

//creates one review
routes.post("/review");

module.exports = routes;
