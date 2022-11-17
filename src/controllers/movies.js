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

module.exports.getByRating = (req, res) => {
  try {
    const rating = req.params.rating;
    MovieModel.find({ rating: rating })
      .then((data) => {
        if (data.length == 0) {
          res.status(500).send("No movies could be found with that rating.");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving movie ratings.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getByGenre = (req, res) => {
  try {
    const genre = req.params.genre;
    MovieModel.find({ genre: genre })
      .then((data) => {
        if (data.length == 0) {
          res.status(500).send("No movies could be found with that genre.");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movie genres.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteOne = async (req, res) => {
  // #swagger.description = 'Delete movie by ID'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid contact id to delete a contact.");
    }
    const movieId = new ObjectId(req.params.id);
    MovieModel.deleteOne({ _id: movieId })
      .then(() => {
        res.status(200).json("Movie successfully deleted");
      })
      .catch((err) => {
        console.log(error);
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.update = async (req, res) => {
  try {
    const movieId = new ObjectId(req.params.id);
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid contact id to update a contact.");
    }
    const updateMovie = {
      title: req.body.title,
      rating: req.body.rating,
      description: req.body.description,
      genre: req.body.genre,
      ownerId: req.body.ownerId,
      availability: req.body.availability,
      location: req.body.location,
    };
    MovieModel.findOneAndUpdate(
      { _id: movieId },
      updateMovie,
      null,
      (err, data) => {
        if (err) {
          res
            .status(500)
            .json(err || "Some error occurred while updating the movie.");
        } else {
          res.status(204).send(data);
          console.log("New data : ", updateMovie);
        }
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
