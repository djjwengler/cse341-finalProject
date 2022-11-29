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

describe("GETall movies", () => {
  it("should return all movies", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET id", () => {
  it("should return a single movie by id", async () => {
    const res = await request(app).get("/movies/6374fedf191e03ef27dec2f6");
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Hocus Pocus");
  });
});

describe("GET title", () => {
  it("should return a single movie by title", async () => {
    const res = await request(app).get("/movies/title/Hook");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe("Hook");
  });
});

describe("GET rating", () => {
  it("should return a single movie by rating", async () => {
    const res = await request(app).get("/movies/rating/PG");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].rating).toBe("PG");
  });
});

describe("GET genre", () => {
  it("should return a single movie by genre", async () => {
    const res = await request(app).get("/movies/genre/comedy");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].genre).toBe("COMEDY");
  });
});

describe("POST movie", () => {
  it("should create a new movie", async () => {
    const res = await request(app).post("/movies").send({
      title: "NewMovie",
      rating: "PG",
      description: "new movie to watch",
      genre: "comedy",
      ownerId: "6374fe62191e03ef27dec2f5",
      availability: "false",
      location: "300 Bruce Hill Rd",
    });
    await expect(res.statusCode).toBe(201);
    await expect(res.body.title).toBe("NewMovie");
  });
});

describe("PUT movie", () => {
  it("should update a movie", async () => {
    const res = await request(app)
      .put("/movies/6376b660b06610cce064cc31")
      .send({
        title: "Hocus Pocus",
        rating: "pg",
        description: "Three witches try to cast a spell to reclaim their youth",
        genre: "comedy",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: "FALSE",
        location: "300 Bruce Hill Rd",
      });
    expect(res.statusCode).toBe(204);
  });
});

describe("DELETE movie by id", () => {
  it("should delete a single movie by id", async () => {
    const result = await request(app).get("/movies/title/NewMovie");
    const id = result.body[0]._id;
    const res = await request(app).delete("/movies/" + id);
    expect(res.statusCode).toBe(200);
  });
});
