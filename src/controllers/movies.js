const db = require("../models");
const MovieModel = db.movie;

module.exports.create = (req, res) => {
  // #swagger.description = 'Add movie'
  try {
    const user = new MovieModel(req.body);
    user
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while adding the movie.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getAll = (req, res) => {
  // #swagger.description = 'See all movies'
  try {
    MovieModel.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getOneById = (req, res) => {
  // #swagger.description = 'See one movie by id'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid contact id to find a day.");
    }
    const movieId = new ObjectId(req.params.id);
    MovieModel.find({ _id: movieId })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the movie.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};
