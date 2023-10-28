const Users = require("../models/userModel");

const signUp = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

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
      phone,
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

module.exports = { signUp };
