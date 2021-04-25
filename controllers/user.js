const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const awsUploadImage = require("../utils/aws-upload-image");
const user = require("../models/user");

async function register(input) {
  const newUser = input;
  newUser.email = newUser.email.toLowerCase();
  newUser.username = newUser.username.toLowerCase();

  const { email, username, password } = newUser;

  // Revisamos si el email esta en uso
  const foundEmail = await User.findOne({ email });
  if (foundEmail) throw new Error("El email ya esta en uso");

  // Revisamos si el username esta en uso
  const foundUsername = await User.findOne({ username });
  if (foundUsername) throw new Error("El nombre de usuario ya esta en uso");

  // Encriptar
  const salt = await bcryptjs.genSaltSync(10);
  newUser.password = await bcryptjs.hash(password, salt);

  try {
    const user = new User(newUser);
    user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  register,
};
