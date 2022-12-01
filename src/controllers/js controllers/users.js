const db = require("../../models");
const UserModel = db.user;
const ObjectId = require("mongodb").ObjectId;

module.exports.create = async (req, res) => {
  // #swagger.description = 'Create user'
  try {
    const user = new UserModel(req.body);
    const data = await user.save();
    await res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getAll = async (req, res) => {
  // #swagger.description = 'See all users'

  try {
    await UserModel.find({})
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

module.exports.getOneById = async (req, res) => {
  // #swagger.description = 'See one user by id'
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to find a user.");
    }
    const userId = req.params.id;
    UserModel.findById(userId, (err, user) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the user.",
        });
      }
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(500).send({
          message: "There is no user by this title.",
        });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteOne = async (req, res) => {
  // #swagger.description = 'Delete user by ID'

  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to delete a user.");
    }
    const userId = new ObjectId(req.params.id);
    await UserModel.deleteOne({ _id: userId })
      .then(() => {
        res.status(200).json("User successfully deleted");
      })
      .catch((err) => {
        console.log(error);
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.update = async (req, res) => {
  // #swagger.description = 'Update one user by id'

  try {
    const userId = new ObjectId(req.params.id);
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json("Must use a valid id to update a user.");
    }
    const updateUser = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      streetAddress: req.body.streetAddress,
      email: req.body.email,
      phoneNum: req.body.phoneNum,
    };
    UserModel.findOneAndUpdate(
      { _id: userId },
      updateUser,
      { runValidators: true },
      (err, data) => {
        if (err) {
          res
            .status(500)
            .json(err || "Some error occurred while updating the user.");
        } else {
          res.status(204).send(data);
          console.log("New data : ", updateUser);
        }
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};
