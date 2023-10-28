const express = require("express");
const { signUp } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/sign-up", signUp);

module.exports = userRouter;
