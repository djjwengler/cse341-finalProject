const routes = require("express").Router();
const reviewsController = require("../controllers/reviews");

//retrieves all reviews
routes.get("/");

//retrieves one review by ID
routes.get("/:id");

//updates one review by ID
routes.put("/:id");

//deletes one review by ID
routes.delete("/:id");

//creates one review
routes.post("/");

module.exports = routes;
