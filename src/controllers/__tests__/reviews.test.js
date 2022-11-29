const reviewController = require("../reviews");
const mockingoose = require("mockingoose");
const Review = require("../../models").review;

let req, res, send;

beforeEach(() => {
  req = {};
  send = jest.fn();
  res = {
    status: jest.fn().mockImplementation(() => ({ send })),
    json: jest.fn(),
  };

  mockingoose(Review).toReturn({
    id: "6374ff5e191e03ef27dec2f7",
    username: "NewReviewer",
    mediaId: "6376b6efb06610cce064cc38",
    reviewTitle: "Wierd",
    reviewBody: "Why?",
  });
});

afterEach(() => {
  mockingoose(Review).reset();
});

describe("create()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        username: "NewReviewer",
        mediaId: "6376b6efb06610cce064cc38",
        reviewTitle: "Wierd",
        reviewBody: "Why?",
      };
    });
    it("returns a 201", async () => {
      await reviewController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});

describe("getAll()", () => {
  describe("happy path", () => {
    it("returns a 200", async () => {
      await reviewController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe("getByUsername()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        username: "NewReviewer",
        mediaId: "6376b6efb06610cce064cc38",
        reviewTitle: "Wierd",
        reviewBody: "Why?",
      };
      req.params = {
        username: "NewReviewer",
      };
    });
    it("returns a 200", async () => {
      await reviewController.getByUsername(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
