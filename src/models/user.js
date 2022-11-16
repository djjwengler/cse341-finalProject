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
        type: Number,
        validate: {
          validator: function (v) {
            return /\d{3}-\d{3}-\d{4}/.text(v);
          },
          message: (props) => `${props.value} is not a valid phone number!`,
        },
        required: "User phone number is required",
      },
    })
  );

  return User;
};
