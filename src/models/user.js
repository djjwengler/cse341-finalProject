module.exports = (mongoose, validator) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema({
      username: {
        type: String,
        unique: true,
        required: [true, "Please enter your name"],
        minlength: [6, "The username must be a min of 6 characters"],
        trim: true,
      },
      firstName: {
        type: String,
        required: [true, "Please enter your first name"],
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, "Please enter a last name"],
        trim: true,
      },
      streetAddress: {
        type: String,
        required: [true, "Please enter your street address"],
        trim: true,
      },
      email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        validate: {
          validator: function (v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          message: "Please enter a valid email",
        },
      },
      phoneNum: {
        type: String,
        required: [true, "User phone number is required"],
        trim: true,
        validate: {
          validator: function (v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: "Please enter a valid phone number e.g. XXX-XXX-XXXX",
        },
      },
    })
  );

  return User;
};
