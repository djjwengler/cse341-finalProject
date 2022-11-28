const {
  Types: { ObjectId },
} = require("mongoose");
const mockingoose = require("mockingoose");
const BooksModel = require("../../models/book.js");
const db = require("../../models");
const BookModel = db.book;
const booksController = require("../books");
const TestResponse = require("./testResponse");

const getAll = booksController.getAll;

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
