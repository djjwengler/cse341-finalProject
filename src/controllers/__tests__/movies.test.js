const movieController = require("../movies");

let req, res, send;

beforeEach(() => {
  req = {};
  send = jest.fn();
  res = {
    status: jest.fn(() => ({
      send,
    })),
    json: jest.fn(),
  };
});

describe("create()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        title: "NewMovie",
        rating: "PG",
        description: "new movie to watch",
        genre: "comedy",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
    });
    it("returns a 201", () => {
      movieController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});
