const userController = require("../users");
const mockingoose = require("mockingoose");
const User = require("../../models").user;

let req, res, send;

beforeEach(() => {
  req = {};
  send = jest.fn();
  res = {
    status: jest.fn().mockImplementation(() => ({ send })),
    json: jest.fn(),
  };

  mockingoose(User).toReturn({
    id: "6374ff5e191e03ef27dec2f7",
    username: "Misterrogers",
    firstName: "Mister",
    lastName: "Rogers",
    streetAddress: "23 Bruce Hill Rd",
    email: "wontyoube@myneighbor.com",
    phoneNum: "207-121-1212",
  });
});

afterEach(() => {
  mockingoose(User).reset();
});

describe("getAll()", () => {
  describe("happy path", () => {
    it("returns a 200", async () => {
      await userController.getAll(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
