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

// describe("POST book", () => {
//   it("should create a new book", async () => {
//     const res = await await request(app).post("/books").send({
//       title: "Mansfield Park",
//       author: "Jane Austen",
//       description: "Sadness and then happiness",
//       genre: "romance",
//       ownerId: "6374fe62191e03ef27dec2f5",
//       availability: "false",
//       location: "300 Bruce Hill Rd",
//     });
//     expect(res.statusCode).toBe(201);
//     expect(res.body.title).toBe("Mansfield Park");
//   });
// });

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

// describe("DELETE book by id", () => {
//   it("should delete a single book by id", async () => {
//     const res = await request(app).delete("/books/6384d833e8a4ead8fd712cbe");
//     expect(res.statusCode).toBe(200);
//   });
// });
