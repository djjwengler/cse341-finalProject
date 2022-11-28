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

describe("check api-docs", () => {
  it("should check the swagger route", async () => {
    const res = await request(app).get("/api-docs");
    //redirects to swagger
    expect(res.statusCode).toBe(301);
  });
});
