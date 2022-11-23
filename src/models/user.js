

module.exports = (mongoose, validator) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema({
      username: {
        type: String,
        unique: true,
        required: [true, "Please enter your name"],
        minlength: [6, "The username must be a min of characters"],
        trim: true
      },
      firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        trim: true
      },
      lastName: {
        type: String,
        required: [true, "Please enter a last name"],
        trim: true
      },
      streetAddress: {
        type: String,
        required: [true, "Please enter your street address"],
        trim: true
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        trim: true,
      },
      phoneNum: {
        type: String,
        required: [true, "User phone number is required"],
        trim: true
      },
    })
  );

  return User;
};
