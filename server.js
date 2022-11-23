const express = require("express");
const bodyParser = require("body-parser");
//const mongodb = require("./src/database/connect");
const port = process.env.PORT || 8080;
const db = require("./src/models");
const app = express();

app.use(bodyParser.json()).use("/", require("./src/routes"));

process.on("uncaughtException", (err, origin) => {
  console.log(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Connected to database ${db.database} and listening on http://localhost:${port}`
      );
    });
  })
  .catch((err) => {
    console.log("Cannot connect to database", err);
  });
