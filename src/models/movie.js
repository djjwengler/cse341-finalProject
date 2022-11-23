module.exports = (mongoose, validator) => {
  const Movie = mongoose.model(
    "movies",
    mongoose.Schema({
      title: {
        type: String,
        required: [true, "Please enter the title of the movie"],
        trim: true,
      },
      rating: {
        type: String,
        required: [true, "Please enter the rating of the movie"],
        trim: true,
        uppercase: true,
      },
      description: {
        type: String,
        trim: true,
      },
      genre: {
        type: String,
        uppercase: true,
        trim: true,
      },
      ownerId: {
        type: String,
        required: [true, "Please enter the ID of the owner"],
        trim: true,
      },
      availability: {
        type: String,
        required: [true, "Is this movie available? true or false"],
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

  return Movie;
};
