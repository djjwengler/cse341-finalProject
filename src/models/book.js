module.exports = (mongoose, validator) => {
  const Book = mongoose.model(
    "books",
    mongoose.Schema({
      title: {
        type: String,
        required: [true, "Please enter the title of the book"],
        trim: true,
      },
      author: {
        type: String,
        required: [true, "Please enter the author of the book"],
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      genre: {
        type: String,
        uppercase: true,
      },
      ownerId: {
        type: String,
        required: [true, "Please enter the ID of the owner"],
        trim: true,
      },
      availability: {
        type: String,
        required: [true, "Is this book available? true or false"],
        trim: true,
        lowercase: true,
        default: "true",
      },
      location: {
        type: String,
        required: [
          true,
          "Where is this item currently located? e.g. street address",
        ],
        trim: true,
      },
    })
  );

  return Book;
};
