const Users = require("../models/userModel");

const signUp = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    /* if (!(name || email || phone || password)) {
      return res.status(400).json({
        status: "error",
        message: "invalid input field",
      });
    } */

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return res.status(400).json({
        status: "Error",
        message: "Invalid email entered",
      });
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "error",
        message: "Email already exists",
      });
    }

    const newUser = new Users({
      name,
      email,
      phoneNumber,
      password,
      role: "user",
    });

    await newUser.save();
    res.status(200).json({
      status: "success",
      message: "Sign up successful",
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  const result = await Users.find();
  res.status(200).json({
    status: "success",
    message: result,
  });
};

const specificUser = async (req, res) => {
  try {
    const email = req.params.email;
    const result = await Users.find({ email: email });
    if (result.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      return res.status(404).json({
        message: "User find successful",
        result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signUp, getUsers, specificUser };
