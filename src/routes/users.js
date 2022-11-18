const routes = require("express").Router();
const usersController = require("../controllers/users");
const secret = process.env.CLIENT_SECRET;
const domain = process.env.CLIENT_DOMAIN;
const clientId = process.env.CLIENT_ID;
const baseUrl = process.env.BASE_URL;
const { auth } = require("express-openid-connect");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: secret,
  baseURL: baseUrl,
  clientID: clientId,
  issuerBaseURL: domain,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
// routes.use(auth(config));

// req.isAuthenticated is provided from the auth router
// routes.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });

//retrieves all users
routes.get("/", usersController.getAll);
//retrieves one user by ID
routes.get("/:id", usersController.getOneById);

//updates one user by ID
routes.put("/:id", usersController.update);

//deletes one user by ID
routes.delete("/:id", usersController.deleteOne);

//creates one user
routes.post("/", usersController.create);

module.exports = routes;
