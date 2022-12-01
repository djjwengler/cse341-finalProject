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
var ReviewModel = db.review;
var ObjectId = require("mongodb").ObjectId;
module.exports.create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var review, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                review = new ReviewModel(req.body);
                return [4 /*yield*/, review.save()];
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
                    .json(err_1.message || "Some error occurred while adding the review.");
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
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ReviewModel.find({})
                        .then(function (data) {
                        res.status(200).send(data);
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving reviews."
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(500).json(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.getOneById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reviewId;
    return __generator(this, function (_a) {
        // #swagger.description = 'See one review by id'
        try {
            if (!ObjectId.isValid(req.params.id)) {
                res.status(400).json("Must use a valid id to find a review.");
            }
            reviewId = req.params.id;
            ReviewModel.findById(reviewId, function (err, review) {
                if (err) {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving the review."
                    });
                }
                if (review) {
                    res.status(200).send(review);
                }
                else {
                    res.status(500).send({
                        message: err.message || "There is no review by this title."
                    });
                }
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
        return [2 /*return*/];
    });
}); };
module.exports.getByUsername = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                username = req.params.username;
                if (username.length < 2) {
                    res.status(400).json("Must use a valid username");
                }
                return [4 /*yield*/, ReviewModel.find({ username: username })
                        .then(function (data) {
                        if (data.length == 0) {
                            res.status(500).send("No reviews could be found by that username.");
                        }
                        else {
                            res.status(200).send(data);
                        }
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving reviews."
                        });
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(500).json(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
module.exports.getByMedia = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var mediaId, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                mediaId = req.params.id;
                if (mediaId.length < 2) {
                    res.status(400).json("Must use a valid mediaId");
                }
                return [4 /*yield*/, ReviewModel.find({ mediaId: mediaId })
                        .then(function (data) {
                        if (data.length == 0) {
                            res.status(500).send("No reviews could be found by that media Id.");
                        }
                        else {
                            res.status(200).send(data);
                        }
                    })["catch"](function (err) {
                        res.status(500).send({
                            message: err.message || "Some error occurred while retrieving reviews."
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
module.exports.deleteOne = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reviewId, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                if (!ObjectId.isValid(req.params.id)) {
                    res.status(400).json("Must use a valid id to delete a review.");
                }
                reviewId = new ObjectId(req.params.id);
                return [4 /*yield*/, ReviewModel.deleteOne({ _id: reviewId })
                        .then(function () {
                        res.status(200).json("Review successfully deleted");
                    })["catch"](function (err) {
                        console.log(err);
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
module.exports.update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reviewId, updateReview_1;
    return __generator(this, function (_a) {
        // #swagger.description = 'Update one review by id'
        try {
            reviewId = new ObjectId(req.params.id);
            if (!ObjectId.isValid(req.params.id)) {
                res.status(400).json("Must use a valid id to update a review.");
            }
            updateReview_1 = {
                username: req.body.username,
                mediaId: req.body.mediaId,
                reviewTitle: req.body.reviewTitle,
                reviewBody: req.body.reviewBody
            };
            ReviewModel.findOneAndUpdate({ _id: reviewId }, updateReview_1, { runValidators: true }, function (err, data) {
                if (err) {
                    res
                        .status(500)
                        .json(err || "Some error occurred while updating the review.");
                }
                else {
                    res.status(204).send(data);
                    console.log("New data : ", updateReview_1);
                }
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
        return [2 /*return*/];
    });
}); };
