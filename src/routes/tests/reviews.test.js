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

describe("GETall reviews", () => {
  it("should return all reviews", async () => {
    const res = await request(app).get("/reviews");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET id", () => {
  it("should return a single review by id", async () => {
    const res = await request(app).get("/reviews/6376cc411740f4925526da8f");
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe("JWengler");
  });
});

describe("GET username", () => {
  it("should return a single review by title", async () => {
    const res = await request(app).get("/reviews/username/JWengler");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].username).toBe("JWengler");
  });
});

describe("GET movie or book review", () => {
  it("should return a single review by id", async () => {
    const res = await request(app).get(
      "/reviews/media/6376b734b06610cce064cc3c"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body[0].mediaId).toBe("6376b734b06610cce064cc3c");
  });
});

describe("POST review", () => {
  it("should create a new review", async () => {
    const res = await await request(app).post("/reviews").send({
      username: "NewReviewer",
      mediaId: "6376b6efb06610cce064cc38",
      reviewTitle: "ReviewTitle",
      reviewBody: "ReviewBody",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe("NewReviewer");
  });
});

describe("PUT review", () => {
  it("should update a review", async () => {
    const res = await request(app)
      .put("/reviews/6376cc411740f4925526da8f")
      .send({
        username: "JWengler",
        mediaId: "6376b734b06610cce064cc3c",
        reviewTitle: "The very best Austen",
        reviewBody: "Delightful and fabulous in every way",
      });
    expect(res.statusCode).toBe(204);
  });
});

// BEFORE EVERY TEST RUN: update with existing Hook ID
describe("DELETE review by id", () => {
  it("should delete a single review by id", async () => {
    const result = await request(app).get("/reviews/username/NewReviewer");
    const id = result.body[0]._id;
    const res = await request(app).delete("/reviews/" + id);
    expect(res.statusCode).toBe(200);
  });
});
