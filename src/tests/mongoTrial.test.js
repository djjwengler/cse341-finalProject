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

const {
  Types: { ObjectId },
} = require("mongoose");
const mockingoose = require("mockingoose");
// const BooksModel = require("../models/book.js");
const db = require("../models");
const BookModel = db.book;
const { getAll } = require("../controllers/books");
const TestResponse = require("./testResponse");

jest.setTimeout(60000);

describe("Books service", () => {
  describe("getAll", () => {
    test("should return the list of books", async () => {
      const _book = {
        title: "Book 1",
        author: "Author Name",
        description: "Book description",
        genre: "Book genre",
        ownerId: "6374fe62191e03ef27dec2f5",
        availability: true,
        location: "Book location",
      };

      mockingoose(BookModel).toReturn(_book, "find");

      // const req = {
      //     params: {}
      // }

      const res = new TestResponse();

      await getAll;
      expect(res.statusCode).toBe(200);
      expect(res.data).toEqual(_book);

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
    });
  });
});
