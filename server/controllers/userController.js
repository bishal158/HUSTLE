// common imports
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const filesystem = require("fs");
//  modal imports

const User = require("../models/userSchema");


//  controller functions starts here
const signup = async (req, res, next) => {
  const { full_name, phone, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({
    full_name,
    phone,
    email,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  res.status(201).json({ message: user });
};

//  controller functions ends here







// exports here
exports.signup = signup;