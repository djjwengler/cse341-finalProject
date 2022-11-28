const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../../app");
const dotenv = require("dotenv");
dotenv.config();

// Connect to the database before each test
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

// Closing database connection after each test
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET id", () => {
  it("should return a single user by id", async () => {
    const res = await request(app).get("/users/6374fe62191e03ef27dec2f5");
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe("Timmy");
  });
});

describe("POST book", () => {
  it("should create a new user", async () => {
    const res = await await request(app).post("/users").send({
      username: "newUser",
      firstName: "New",
      lastName: "User",
      streetAddress: "XX Bruce Hill Rd",
      email: "newuser@myneighbor.com",
      phoneNum: "111-111-1111",
    });
    //check authorization error
    expect(res.statusCode).toBe(302);
  });
});

describe("PUT book", () => {
  it("should update a user", async () => {
    const res = await request(app).put("/users/63765476893de1c9d6db4526").send({
      username: "HarryBobby",
      firstName: "Harry",
      lastName: "Robert",
      streetAddress: "230 Bruce Hill Rd",
      email: "harry4@example.com",
      phoneNum: "207-444-6666",
    });
    expect(res.statusCode).toBe(204);
  });
});

describe("DELETE user by id", () => {
  it("should delete a single user by id", async () => {
    const res = await request(app).delete("/users/637e8e72722d53d721e15373");
    //check authorization error
    expect(res.statusCode).toBe(302);
  });
});
