const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (username, password, role) => {
  // check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) throw new Error("Username already exists");

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create new user
  const newUser = new User({
    username,
    password: hashedPassword,
    role,
  });

  await newUser.save();
  return {
    message: "User registered successfully",
    data: newUser,
  };
};

exports.login = async (username, password) => {
  // Tìm người dùng theo username
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Kiểm tra mật khẩu
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Tạo token JWT
  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
  );

  return { message: "Login successful", data: user };
};
