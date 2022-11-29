const bookController = require("../books");
const mockingoose = require("mockingoose");
const Book = require("../../models").book;

let req, res, send;

beforeEach(() => {
  req = {};
  send = jest.fn();
  res = {
    status: jest.fn().mockImplementation(() => ({ send })),
    json: jest.fn(),
  };

  mockingoose(Book).toReturn({
    id: "6374ff5e191e03ef27dec2f7",
    title: "New Book",
    author: "New Author",
    description: "description",
    genre: "romance",
    ownerId: "6374fe62191e03ef27dec2f5",
    availability: "false",
    location: "300 Bruce Hill Rd",
  });
});

afterEach(() => {
  mockingoose(Book).reset();
});

describe("create()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "New Book",
        author: "New Author",
        description: "description",
        genre: "romance",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
    });
    it("returns a 201", async () => {
      await bookController.create(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});

describe("getAll()", () => {
  describe("happy path", () => {
    it("returns a 200", async () => {
      await bookController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe("getOneByTitle()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "New Book",
        author: "New Author",
        description: "description",
        genre: "romance",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
      req.params = {
        title: "New Book",
      };
    });
    it("returns a 200", async () => {
      await bookController.getOneByTitle(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe("getByAuthor()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "New Book",
        author: "New Author",
        description: "description",
        genre: "romance",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
      req.params = {
        author: "New Author",
      };
    });
    it("returns a 200", async () => {
      await bookController.getByAuthor(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe("getByGenre()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "New Book",
        author: "New Author",
        description: "description",
        genre: "romance",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
      req.params = {
        genre: "romance",
      };
    });
    it("returns a 200", async () => {
      await bookController.getByGenre(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
