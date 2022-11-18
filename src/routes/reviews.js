const routes = require("express").Router();
const reviewsController = require("../controllers/reviews");

//retrieves all reviews
routes.get("/", reviewsController.getAll);

//retrieves one review by ID
routes.get("/:id", reviewsController.getOneById);

//retrieves one review by username
routes.get("/username/:username", reviewsController.getByUsername);

//retrieves one review by movie/book id
routes.get("/media/:id", reviewsController.getByMedia);

//updates one review by ID
routes.put("/:id", reviewsController.update);

//deletes one review by ID
routes.delete("/:id", reviewsController.deleteOne);

//creates one review
routes.post("/", reviewsController.create);

module.exports = routes;
