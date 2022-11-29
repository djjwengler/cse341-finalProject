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
    id: "6374ff5e191e03ef27dec2f7",
    title: "NewMovie",
    rating: "PG",
    description: "new movie to watch",
    genre: "comedy",
    ownerId: "6374fe62191e03ef27dec2f5",
    availability: "false",
    location: "300 Bruce Hill Rd",
  });
});

afterEach(() => {
  mockingoose(Movie).reset();
});

describe("create()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
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

describe("getAll()", () => {
  describe("happy path", () => {
    it("returns a 200", async () => {
      await movieController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

// describe("getOneById()", () => {
//   describe("happy path", () => {
//     beforeEach(() => {
//       req.body = {
//         id: "6374ff5e191e03ef27dec2f7",
//         title: "NewMovie",
//         rating: "PG",
//         description: "new movie to watch",
//         genre: "comedy",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: "false",
//         location: "300 Bruce Hill Rd",
//       };
//       req.params = {
//         id: "6374ff5e191e03ef27dec2f7",
//       };
//     });
//     it("returns a 200", async () => {
//       await movieController.getOneById(req, res);
//       expect(res.status).toHaveBeenCalledWith(200);
//     });
//   });
// });

describe("getOneByTitle()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "NewMovie",
        rating: "PG",
        description: "new movie to watch",
        genre: "comedy",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
      req.params = {
        title: "NewMovie",
      };
    });
    it("returns a 200", async () => {
      await movieController.getOneByTitle(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe("getByRating()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "NewMovie",
        rating: "PG",
        description: "new movie to watch",
        genre: "comedy",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
      req.params = {
        rating: "PG",
      };
    });
    it("returns a 200", async () => {
      await movieController.getByRating(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

describe("getByGenre()", () => {
  describe("happy path", () => {
    beforeEach(() => {
      req.body = {
        id: "6374ff5e191e03ef27dec2f7",
        title: "NewMovie",
        rating: "PG",
        description: "new movie to watch",
        genre: "comedy",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "false",
        location: "300 Bruce Hill Rd",
      };
      req.params = {
        genre: "comedy",
      };
    });
    it("returns a 200", async () => {
      await movieController.getByGenre(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});

// describe("deleteOne()", () => {
//   describe("happy path", () => {
//     beforeEach(() => {
//       req.body = {
//         id: "6374ff5e191e03ef27dec2f7",
//         title: "NewMovie",
//         rating: "PG",
//         description: "new movie to watch",
//         genre: "comedy",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: "false",
//         location: "300 Bruce Hill Rd",
//       };
//       req.params = {
//         genre: "comedy",
//       };
//     });
//     it("returns a 200", async () => {
//       await movieController.deleteOne(req, res);
//       expect(res.status).toHaveBeenCalledWith(200);
//     });
//   });
// });

// describe("update()", () => {
//   describe("happy path", () => {
//     beforeEach(() => {
//       req.body = {
//         id: "6374ff5e191e03ef27dec2f7",
//         title: "NewMovie",
//         rating: "PG",
//         description: "new movie to watch",
//         genre: "comedy",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: "false",
//         location: "300 Bruce Hill Rd",
//       };
//       req.params = {
//         genre: "comedy",
//       };
//     });
//     it("returns a 200", async () => {
//       await movieController.update(req, res);
//       expect(res.status).toHaveBeenCalledWith(200);
//     });
//   });
// });
