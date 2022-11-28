// const {
//   Types: { ObjectId },
// } = require("mongoose");
const mongoose = require("mongoose");
const mockingoose = require("mockingoose");
const BooksModel = require("../../models/book.js");
const db = require("../../models");
const BookModel = db.book;
const booksController = require("../books");
const request = require("supertest");
const { getOneById } = require("../books");
const app = require("../../../app");

// const getOneById = booksController.getOneById;

jest.setTimeout(60000);

// describe("getAll", () => {
//   test("should return the list of books", async () => {
//     const _book = {
//       _id: ObjectId("6376b660b06610cce064cc31"),
//       title: "Book 1",
//       author: "Author Name",
//       description: "Book description",
//       genre: "Book genre",
//       ownerId: "6374fe62191e03ef27dec2f5",
//       availability: true,
//       location: "Book location",
//     };

//     mockingoose(BookModel).toReturn(_book, "findOne");

//     const req = {
//       params: { _id: "6376b660b06610cce064cc31" },
//     };

//     const res = new TestResponse();

//     await getOneById(req, res);
//     expect(res.statusCode).toBe(200);
//     expect(res.data).toEqual(_book);

// Connect to the database before each test
beforeEach(async () => {
  await mongoose.connect(process.env._MONGODB_URI);
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

// mockingoose(BookModel).toReturn(
//   [
//     {
//       title: "Book 1",
//       author: "Author Name",
//       description: "Book description",
//       genre: "Book genre",
//       ownerId: "6374fe62191e03ef27dec2f5",
//       availability: true,
//       location: "Book location",
//     },
//     {
//       title: "Book 2",
//       author: "Author2 Name",
//       description: "Book2 description",
//       genre: "Book2 genre",
//       ownerId: "6374fe62191e03ef27dec2f5",
//       availability: true,
//       location: "Book2 location",
//     },
//   ],
//   "find"
// );
// const results = await booksController.getAll;
// expect(results[0].title).toBe("Book 1");
//   });
// });

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
