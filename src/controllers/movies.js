"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var db = require("../models");
var MovieModel = db.movie;
var ObjectId = require("mongodb").ObjectId;
module.exports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movie, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                movie = new MovieModel(req.body);
                return [4 /*yield*/, movie.save()];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, res.status(201).send(data)];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                res
                    .status(500)
                    .json(err_1.message || "Some error occurred while adding the movie.");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports.getAll = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 4]);
                return [4 /*yield*/, MovieModel.find({})
                        .then(function (data) {
                        res.status(200).send(data);
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving movies."
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                err_2 = _a.sent();
                return [4 /*yield*/, res.status(500).json(err_2)];
            case 3:
                _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports.getOneById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movieId, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 1, , 3]);
                if (!ObjectId.isValid(req.params.id)) {
                    res.status(400).json("Must use a valid id to find a movie.");
                }
                movieId = req.params.id;
                MovieModel.findById(movieId, function (err, movie) {
                    if (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving the movie."
                        });
                    }
                    if (movie) {
                        res.status(200).send(movie);
                    }
                    else {
                        res.status(500).send({
                            message: err.message || "There is no movie by this title."
                        });
                    }
                });
                return [3 /*break*/, 3];
            case 1:
                err_3 = _a.sent();
                return [4 /*yield*/, res.status(500).json(err_3)];
            case 2:
                _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.getOneByTitle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var title, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                title = req.params.title;
                if (title.length < 2) {
                    res.status(400).json("Must use a valid title");
                }
                return [4 /*yield*/, MovieModel.find({ title: title })
                        .then(function (data) {
                        res.status(200).send(data);
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving movie."
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(500).json(err_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.getByRating = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rating, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                rating = req.params.rating;
                if (rating.length < 2) {
                    res.status(400).json("Must use a valid rating");
                }
                return [4 /*yield*/, MovieModel.find({ rating: rating })
                        .then(function (data) {
                        if (data.length == 0) {
                            res.status(500).send("No movies could be found with that rating.");
                        }
                        else {
                            res.status(200).send(data);
                        }
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message ||
                                "Some error occurred while retrieving movie ratings."
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(500).json(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.getByGenre = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var genre, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                genre = req.params.genre;
                if (genre.length < 2) {
                    res.status(400).json("Must use a valid genre");
                }
                return [4 /*yield*/, MovieModel.find({ genre: genre })
                        .then(function (data) {
                        if (data.length == 0) {
                            res.status(500).send("No movies could be found with that genre.");
                        }
                        else {
                            res.status(200).send(data);
                        }
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving movie genres."
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                res.status(500).json(err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.deleteOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movieId, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!ObjectId.isValid(req.params.id)) {
                    res.status(400).json("Must use a valid id to delete a movie.");
                }
                movieId = new ObjectId(req.params.id);
                return [4 /*yield*/, MovieModel.deleteOne({ _id: movieId })
                        .then(function () {
                        res.status(200).json("Movie successfully deleted");
                    })["catch"](function (err) {
                        console.log(err);
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                res.status(500).json(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movieId, updateMovie_1;
    return __generator(this, function (_a) {
        // #swagger.description = 'Update movie by ID'
        try {
            movieId = new ObjectId(req.params.id);
            if (!ObjectId.isValid(req.params.id)) {
                res.status(400).json("Must use a valid id to update a movie.");
            }
            updateMovie_1 = {
                title: req.body.title,
                rating: req.body.rating,
                description: req.body.description,
                genre: req.body.genre,
                ownerId: req.body.ownerId,
                availability: req.body.availability,
                location: req.body.location
            };
            MovieModel.findOneAndUpdate({ _id: movieId }, updateMovie_1, { runValidators: true }, function (err, data) {
                if (err) {
                    res
                        .status(500)
                        .json(err || "Some error occurred while updating the movie.");
                }
                else {
                    res.status(204).send(data);
                    console.log("New data : ", updateMovie_1);
                }
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
        return [2 /*return*/];
    });
}); };
