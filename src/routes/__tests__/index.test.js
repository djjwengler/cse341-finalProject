const request = require("supertest");
const app = require("../../../app");

describe("check index", () => {
  it("should check the index route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
