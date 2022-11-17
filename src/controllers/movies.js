const db = require("../models");
const MovieModel = db.movie;
const ObjectId = require("mongodb").ObjectId;

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
    const movieId = req.params.id;
    MovieModel.findById(movieId, (err, movie) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the movie.",
        });
      }
      if (movie) {
        res.status(200).send(movie);
      } else {
        res.status(500).send({
          message: err.message || "There is no movie by this title.",
        });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getOneByTitle = (req, res) => {
  try {
    const title = req.params.title;
    MovieModel.find({ title: title })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving users.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};
