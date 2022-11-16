module.exports = (mongoose) => {
  const Review = mongoose.model(
    "review",
    mongoose.Schema({
      username: {
        type: String,
        required: "Please enter your username",
      },
      mediaId: {
        type: String,
        required: "Please enter the ID of the book or movie",
      },
      reviewTitle: {
        type: String,
      },
      reviewBody: {
        type: String,
        required: "Please write a review",
      },
    })
  );

  return Review;
};
