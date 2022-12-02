const routes = require("express").Router();
const usersController = require("../controllers/users");
const { requiresAuth } = require("express-openid-connect");

//retrieves all users
routes.get("/", usersController.getAll);
//retrieves one user by ID
routes.get("/:id", usersController.getOneById);

//updates one user by ID
routes.put("/:id", usersController.update);

//deletes one user by ID
routes.delete("/:id", requiresAuth(), usersController.deleteOne);

//creates one user
routes.post("/", requiresAuth(), usersController.create);

module.exports = routes;
