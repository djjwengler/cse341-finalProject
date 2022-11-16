module.exports = (mongoose) => {
  const Movie = mongoose.model(
    "movie",
    mongoose.Schema({
      title: {
        type: String,
        required: "Please enter the title of the movie",
      },
      rating: {
        type: String,
        required: "Please enter the rating of the movie",
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
        required: "Is this movie available? True or False",
      },
      location: {
        type: String,
        required: "Where is this item currently located?",
      },
    })
  );

  return Movie;
};
