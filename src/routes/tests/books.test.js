const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../../app");
const dotenv = require("dotenv");
dotenv.config();

// jest.setTimeout(60000);

// Connect to the database before each test
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

// Closing database connection after each test
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GETall books", () => {
  it("should return all books", async () => {
    const res = await request(app).get("/books");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET id", () => {
  it("should return a single book by id", async () => {
    const res = await request(app).get("/books/6376b660b06610cce064cc31");
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Pride and Prejudice");
  });
});

describe("GET title", () => {
  it("should return a single book by title", async () => {
    const res = await request(app).get("/books/title/Persuasion");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe("Persuasion");
  });
});

describe("GET author", () => {
  it("should return a single book by author", async () => {
    const res = await request(app).get("/books/author/Jane%20Austen");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].author).toBe("Jane Austen");
  });
});

describe("GET genre", () => {
  it("should return a single book by genre", async () => {
    const res = await request(app).get("/books/genre/romance");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].genre).toBe("ROMANCE");
  });
});

describe("POST book", () => {
  it("should create a new book", async () => {
    const res = await await request(app).post("/books").send({
      title: "Mansfield Park",
      author: "Jane Austen",
      description: "Sadness and then happiness",
      genre: "romance",
      ownerId: "6374fe62191e03ef27dec2f5",
      availability: "false",
      location: "300 Bruce Hill Rd",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Mansfield Park");
  });
});

describe("PUT book", () => {
  it("should update a book", async () => {
    const res = await request(app).put("/books/6376b660b06610cce064cc31").send({
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "There is pride and there is prejudice and also Darcy is in it.",
      genre: "history romance",
      ownerId: "6374fe62191e03ef27dec2f5",
      availability: "false",
      location: "300 Bruce Hill Rd",
    });
    expect(res.statusCode).toBe(204);
  });
});

// BEFORE EVERY TEST RUN: update with existing Mansfield Park ID
describe("DELETE book by id", () => {
  it("should delete a single book by id", async () => {
    const res = await request(app).delete("/books/6384d833e8a4ead8fd712cbe");
    expect(res.statusCode).toBe(200);
  });
});
