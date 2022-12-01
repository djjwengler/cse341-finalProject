const db = require("../models");
const ReviewModel = db.review;
const ObjectId = require("mongodb").ObjectId;

module.exports.create = async (req, res) => {
  // #swagger.description = 'Add review'

  try {
    const review = new ReviewModel(req.body);
    const data = await review.save();
    await res.status(201).send(data);
  } catch (err) {
    res
      .status(500)
      .json(err.message || "Some error occurred while adding the review.");
  }
};

module.exports.getAll = async (req, res) => {
  // #swagger.description = 'See all reviews'
  try {
    await ReviewModel.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getOneById = async (req, res) => {
  // #swagger.description = 'See one review by id'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to find a review.");
    }
    const reviewId = req.params.id;
    ReviewModel.findById(reviewId, (err, review) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the review.",
        });
      }
      if (review) {
        res.status(200).send(review);
      } else {
        res.status(500).send({
          message: err.message || "There is no review by this title.",
        });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getByUsername = async (req, res) => {
  // #swagger.description = 'See all reviews by username'

  try {
    const username = req.params.username;
    if (username.length < 2) {
      res.status(400).json("Must use a valid username");
    }
    await ReviewModel.find({ username: username })
      .then((data) => {
        if (data.length == 0) {
          res.status(500).send("No reviews could be found by that username.");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getByMedia = async (req, res) => {
  // #swagger.description = 'See all reviews by media id'

  try {
    const mediaId = req.params.id;
    if (mediaId.length < 2) {
      res.status(400).json("Must use a valid mediaId");
    }
    await ReviewModel.find({ mediaId: mediaId })
      .then((data) => {
        if (data.length == 0) {
          res.status(500).send("No reviews could be found by that media Id.");
        } else {
          res.status(200).send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteOne = async (req, res) => {
  // #swagger.description = 'Delete review by ID'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to delete a review.");
    }
    const reviewId = new ObjectId(req.params.id);
    await ReviewModel.deleteOne({ _id: reviewId })
      .then(() => {
        res.status(200).json("Review successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.update = async (req, res) => {
  // #swagger.description = 'Update one review by id'

  try {
    const reviewId = new ObjectId(req.params.id);
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to update a review.");
    }
    const updateReview = {
      username: req.body.username,
      mediaId: req.body.mediaId,
      reviewTitle: req.body.reviewTitle,
      reviewBody: req.body.reviewBody,
    };
    ReviewModel.findOneAndUpdate(
      { _id: reviewId },
      updateReview,
      { runValidators: true },
      (err, data) => {
        if (err) {
          res
            .status(500)
            .json(err || "Some error occurred while updating the review.");
        } else {
          res.status(204).send(data);
          console.log("New data : ", updateReview);
        }
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
