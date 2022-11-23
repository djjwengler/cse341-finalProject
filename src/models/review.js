module.exports = (mongoose, validator) => {
  const Review = mongoose.model(
    "reviews",
    mongoose.Schema({
      username: {
        type: String,
        required: [true, "Please enter your username"],
        trim: true,
        minlength: [6, "The username must be a min of 6 characters"],
      },
      mediaId: {
        type: String,
        required: [true, "Please enter the ID of the book or movie"],
        trim: true,
      },
      reviewTitle: {
        type: String,
        trim: true,
        maxlength: [60, "Please keep review to 60 characters"],
        required: [true, "Please enter a title for the review"],
      },
      reviewBody: {
        type: String,
        required: [true, "Please write a review"],
        trim: true,
        maxlength: [500, "Please keep review to 500 characters"],
      },
    })
  );

  return Review;
};
