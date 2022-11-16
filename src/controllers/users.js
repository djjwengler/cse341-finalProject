const db = require("../models");
const UserModel = db.user;

module.exports.create = (req, res) => {
  try {
    const user = new UserModel(req.body);
    user
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user.",
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getAll = (req, res) => {
  try {
    UserModel.find({})
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
