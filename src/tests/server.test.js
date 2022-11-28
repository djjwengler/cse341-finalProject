const books = require("../routes/books");
const request = require("supertest");
const express = require("express");
// const app = express();
const routes = require("express").Router();
// const app = require("../routes/index");

// app.use(express.urlencoded({ extended: false }));

const app = require("../../app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app).get("/").expect(200);
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app).get("/").expect(200);
  });
});

const assert = require("assert");

const expressApp = express();
const usersController = require("../controllers/users");

expressApp.get("/", usersController.getAll);
expressApp.get("/:id", usersController.getOneById);
expressApp.put("/:id", usersController.update);
expressApp.delete("/:id", usersController.deleteOne);
expressApp.post("/", usersController.create);

// test("index route works", (done) => {
//   request(expressApp)
//     .get("/")
//     .expect("Content-Type", /json/)
//     .expect("Content-Length", "15")
//     .expect(200, done);
// });

// describe("Post Endpoints", () => {
//   it("should create a new post", async () => {
//     const res = await request(app).post("/").send({
//       username: "HarryBobby",
//       firstName: "Harry",
//       lastName: "Robert",
//       streetAddress: "230 Bruce Hill Rd",
//       email: "harry4@example.com",
//       phoneNum: "207-444-6666",
//     });
//     expect(res.statusCode).toEqual(201);
//     expect(res.body).toHaveProperty("post");
//   });
// });

request(expressApp)
  .get("/")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });

request(expressApp)
  .get("/6374fe62191e03ef27dec2f5")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "37")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });

// request(expressApp)
//   .post("/")
//   .send({
//     username: "HarryBobby",
//     firstName: "Harry",
//     lastName: "Robert",
//     streetAddress: "230 Bruce Hill Rd",
//     email: "harry4@example.com",
//     phoneNum: "207-444-6666",
//   })
//   .expect("Content-Type", /json/)
//   .expect("Content-Length", "237")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });
// import express from "express";

// let apps = express();

// apps.use(express.json());
// apps.post("/users", async (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     res.send(400);
//     return;
//   }

//   res.send({ userId: 0 });
// });

// export default apps;

// describe('Test the addLike method', () => {
//   beforeAll(() => {
//       mongoDB.connect();
//   });

//   afterAll((done) => {
//       mongoDB.disconnect(done);
//   });
// }

// describe("Books endpoint", () => {
//   test("should return hello world object", async () => {
//     const res = await request(app).get("/books");
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual({
//       message: "Hello World",
//     });
//   });
// });

// routes.use("/books", books);
// app.use("/", require("../routes"));

// test("index route works", (done) => {
//   request(app)
//     .get("/books")
//     .expect("Content-Type", "text/html; charset=utf-8")
//     .expect(200, done);
// });

// const { MongoClient } = require("mongodb");

// describe("insert", () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//   });

//   it("should insert a doc into collection", async () => {
//     const users = db.collection("users");

//     const mockUser = { _id: "some-user-id", name: "John" };
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({ _id: "some-user-id" });
//     expect(insertedUser).toEqual(mockUser);
//   });
// });

// const booksController = require("../controllers/books");

// describe("Test Handlers", function () {
//   test("responds to /books", () => {
//     // const req = {};

//     // const res = {
//     //   text: "",
//     //   send: function (input) {
//     //     this.text = input;
//     //   },
//     // };
//     const res = booksController.getAll;

//     expect(res).toEqual("hello world!");
//   });

//   test("responds to /hello/:name", () => {
//     const req = { params: { name: "Bob" } };

//     const res = {
//       text: "",
//       send: function (input) {
//         this.text = input;
//       },
//     };
//     hello(req, res);

//     expect(res.text).toEqual("hello Bob!");
//   });
// });

// const {
//   Types: { ObjectId },
// } = require("mongoose");
// const mockingoose = require("mockingoose");
// // const BooksModel = require("../models/book.js");
// const db = require("../models");
// const BookModel = db.book;
// const { getAll } = require("../controllers/books");
// const TestResponse = require("./testResponse");

// jest.setTimeout(60000);

// describe("Books service", () => {
//   describe("getAll", () => {
//     test("should return the list of books", async () => {
//       const _book = {
//         title: "Book 1",
//         author: "Author Name",
//         description: "Book description",
//         genre: "Book genre",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: true,
//         location: "Book location",
//       };

//       mockingoose(BookModel).toReturn(_book, "find");

//       // const req = {
//       //     params: {}
//       // }

//       const res = new TestResponse();

//       await getAll;
//       expect(res.statusCode).toBe(200);
//       expect(res.data).toEqual(_book);

//   mockingoose(BookModel).toReturn(
//     [
//       {
//         title: "Book 1",
//         author: "Author Name",
//         description: "Book description",
//         genre: "Book genre",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: true,
//         location: "Book location",
//       },
//       {
//         title: "Book 2",
//         author: "Author2 Name",
//         description: "Book2 description",
//         genre: "Book2 genre",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: true,
//         location: "Book2 location",
//       },
//     ],
//     "find"
//   );
//   const results = await booksController.getAll;
//   expect(results[0].title).toBe("Book 1");
//     });
//   });
// });

// const {
//   Types: { ObjectId },
// } = require("mongoose");
// const mockingoose = require("mockingoose");
// // const BooksModel = require("../models/book.js");
// const db = require("../models");
// const BookModel = db.book;
// const { getAll } = require("../controllers/books");
// const TestResponse = require("./testResponse");

// jest.setTimeout(60000);

// describe("Books service", () => {
//   describe("getAll", () => {
//     test("should return the list of books", async () => {
//       const _book = {
//         title: "Book 1",
//         author: "Author Name",
//         description: "Book description",
//         genre: "Book genre",
//         ownerId: "6374fe62191e03ef27dec2f5",
//         availability: true,
//         location: "Book location",
//       };

//       mockingoose(BookModel).toReturn(_book, "find");

//       // const req = {
//       //     params: {}
//       // }

//       const res = new TestResponse();

//       await getAll;
//       expect(res.statusCode).toBe(200);
//       expect(res.data).toEqual(_book);

//       mockingoose(BookModel).toReturn(
//         [
//           {
//             title: "Book 1",
//             author: "Author Name",
//             description: "Book description",
//             genre: "Book genre",
//             ownerId: "6374fe62191e03ef27dec2f5",
//             availability: true,
//             location: "Book location",
//           },
//           {
//             title: "Book 2",
//             author: "Author2 Name",
//             description: "Book2 description",
//             genre: "Book2 genre",
//             ownerId: "6374fe62191e03ef27dec2f5",
//             availability: true,
//             location: "Book2 location",
//           },
//         ],
//         "find"
//       );
//       const results = await booksController.getAll;
//       expect(results[0].title).toBe("Book 1");
//     });
//   });
// });
