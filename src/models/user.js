module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema({
      username: {
        type: String,
        unique: true,
        required: "Please enter your name",
      },
      firstName: {
        type: String,
        required: "Please enter your first name",
      },
      lastName: {
        type: String,
        required: "Please enter a last name",
      },
      streetAddress: {
        type: String,
        required: "Please enter your street address",
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
      },
      phoneNum: {
        type: String,
        required: "User phone number is required",
      },
    })
  );

  return User;
};
