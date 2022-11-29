const movieController = require("../movies");
const mockingoose = require("mockingoose");
const Movie = require("../../models").movie;

let req, res, send;

beforeEach(() => {
  req = {};
  send = jest.fn();
  res = {
    status: jest.fn().mockImplementation(() => ({ send })),
    json: jest.fn(),
  };

  mockingoose(Movie).toReturn({
    title: "Movie Title",
    rating: "So good!",
    description: "The movie description",
    genre: "Fantasy",
    ownerId: "asdfasdf",
    availability: "true",
    location: "streaming",
  });
});

afterEach(() => {
  mockingoose(Movie).reset();
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

    it("returns a 201", async () => {
      await movieController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});
