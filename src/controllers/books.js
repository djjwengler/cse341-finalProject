const db = require("../models");
const BookModel = db.book;
const ObjectId = require("mongodb").ObjectId;

module.exports.create = (req, res) => {
  // #swagger.description = 'Add book'
  try {
    const book = new BookModel(req.body);
    book
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while adding the book.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getAll = (req, res) => {
  // #swagger.description = 'See all books'
  try {
    BookModel.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving books.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getOneById = (req, res) => {
  // #swagger.description = 'See one book by id'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to find a book.");
    }
    const bookId = req.params.id;
    BookModel.findById(bookId, (err, movie) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the book.",
        });
      }
      if (movie) {
        res.status(200).send(movie);
      } else {
        res.status(500).send({
          message: err.message || "There is no book by this title.",
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
    BookModel.find({ title: title })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving book.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getByAuthor = (req, res) => {
  try {
    const author = req.params.author;
    BookModel.find({ author: author })
      .then((data) => {
        if (data.length == 0) {
          res.status(500).send("No books could be found with that author.");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving book authors.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getByGenre = (req, res) => {
  try {
    const genre = req.params.genre;
    BookModel.find({ genre: genre })
      .then((data) => {
        if (data.length == 0) {
          res.status(500).send("No books could be found with that genre.");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving book genres.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteOne = async (req, res) => {
  // #swagger.description = 'Delete book by ID'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid contact id to delete a book.");
    }
    const bookId = new ObjectId(req.params.id);
    BookModel.deleteOne({ _id: bookId })
      .then(() => {
        res.status(200).json("Book successfully deleted");
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
    const bookId = new ObjectId(req.params.id);
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to update a book.");
    }
    const updateBook = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      genre: req.body.genre,
      ownerId: req.body.ownerId,
      availability: req.body.availability,
      location: req.body.location,
    };
    BookModel.findOneAndUpdate(
      { _id: bookId },
      updateBook,
      null,
      (err, data) => {
        if (err) {
          res
            .status(500)
            .json(err || "Some error occurred while updating the book.");
        } else {
          res.status(204).send(data);
          console.log("New data : ", updateBook);
        }
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
