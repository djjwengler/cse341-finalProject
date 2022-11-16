module.exports = (mongoose) => {
  const Book = mongoose.model(
    "book",
    mongoose.Schema({
      title: {
        type: String,
        required: "Please enter the title of the book",
      },
      author: {
        type: String,
        required: "Please enter the author of the book",
      },
      description: {
        type: String,
      },
      genre: {
        type: String,
      },
      ownerId: {
        type: String,
        required: "Please enter the ID of the owner",
      },
      availability: {
        type: String,
        required: "Is this book available? True or False",
      },
      location: {
        type: String,
        required: "Where is this item currently located?",
      },
    })
  );

  return Book;
};
