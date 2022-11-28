const request = require("supertest");
const app = require("../../app");

describe("check root", () => {
  it("should check the server route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
