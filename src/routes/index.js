const routes = require("express").Router();
const books = require("./books");
const movies = require("./movies");
const reviews = require("./reviews");
const users = require("./users");
const openCors = require("../middleware/cors");
const secret = process.env.CLIENT_SECRET;
const domain = process.env.CLIENT_DOMAIN;
const clientId = process.env.CLIENT_ID;
const baseUrl = process.env.BASE_URL;
const { auth } = require("express-openid-connect");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../middleware/schema");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: secret,
  baseURL: baseUrl,
  clientID: clientId,
  issuerBaseURL: domain,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
routes.use(auth(config));

// req.isAuthenticated is provided from the auth router
routes.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

routes.use(
  "/graphql",
  graphqlHTTP({
    //directing express-graphql to use this schema to map out the graph
    schema: schema,
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql: true,
  })
);

routes.use(openCors);
routes.use("/", require("./swagger"));
routes.use("/books", books);
routes.use("/movies", movies);
routes.use("/users", users);
routes.use("/reviews", reviews);
routes.use("/", () => {});

module.exports = routes;
