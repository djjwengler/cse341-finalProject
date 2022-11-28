const mockingoose = require("mockingoose");
const mongoose = require("mongoose");
const db = require("../../models");
const UserModel = db.user;
const usersController = require("../users");

describe("mockingoose", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  //   it("should validate", async () => {
  //     const user = new UserModel({
  //       username: "Misterrogers",
  //       firstName: "Mister",
  //       lastName: "Rogers",
  //       streetAddress: "23 Bruce Hill Rd",
  //       email: "wontyoube@myneighbor.com",
  //       phoneNum: "207-121-1212",
  //     });

  //     await user.validate();
  //     expect(user.toObject()).toHaveProperty("created");
  //     expect(user.toObject()).toHaveProperty("_id");
  //   });

  it("should lean", async () => {
    mockingoose(UserModel).toReturn([
      {
        username: "Misterrogers",
        firstName: "Mister",
        lastName: "Rogers",
        streetAddress: "23 Bruce Hill Rd",
        email: "wontyoube@myneighbor.com",
        phoneNum: "207-121-1212",
      },
    ]);

    const result = await UserModel.find().lean();
    expect(result[0]).toMatchObject({ username: "Misterrogers" });
  });
  it("should find", async () => {
    mockingoose(UserModel).toReturn([
      {
        username: "Misterrogers",
        firstName: "Mister",
        lastName: "Rogers",
        streetAddress: "23 Bruce Hill Rd",
        email: "wontyoube@myneighbor.com",
        phoneNum: "207-121-1212",
      },
    ]);

    const result = await UserModel.find().where("name").in([1]);
    expect(result).toHaveLength(1);
    expect(result[0].toObject()).toHaveProperty("_id");
    expect(result[0].toObject()).toMatchObject({ username: "Misterrogers" });
    expect(result[0]).toBeInstanceOf(UserModel);
  });
});

// it("should find", () => {
//   mockingoose.UserModel.toReturn({
//     username: "Misterrogers",
//     firstName: "Mister",
//     lastName: "Rogers",
//     streetAddress: "23 Bruce Hill Rd",
//     email: "wontyoube@myneighbor.com",
//     phoneNum: "207-121-1212",
//   });

//   return UserModel.find()
//     .where("username")
//     .in([1])
//     .then((result) => {
//       expect(result).toEqual({ username: "Misterrogers" });
//     });
// });

// describe("Books service", () => {
//   describe("fetchBooks", () => {
//     it("should return the list of books", async () => {
//       mockingoose(UserModel).toReturn(
//         [
//           {
//             username: "Misterrogers",
//             firstName: "Mister",
//             lastName: "Rogers",
//             streetAddress: "23 Bruce Hill Rd",
//             email: "wontyoube@myneighbor.com",
//             phoneNum: "207-121-1212",
//           },
//           {
//             username: "Misterrogers2",
//             firstName: "Mister2",
//             lastName: "Rogers2",
//             streetAddress: "232 Bruce Hill Rd",
//             email: "wontyoube2@myneighbor.com",
//             phoneNum: "207-121-2222",
//           },
//         ],
//         "find"
//       );
//       const results = await usersController.getAll();
//       expect(results[0].username).toBe("Misterrogers");
//     });
//   });
// });
