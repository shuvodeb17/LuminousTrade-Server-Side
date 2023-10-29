const express = require("express");
const { signUp ,getUsers ,specificUser} = require("../controllers/userController");
const { jwtCheck } = require("../middleware/jwtMiddleware");
const userRouter = express.Router();

userRouter.post("/sign-up", signUp);
userRouter.post("/jwt-check", jwtCheck);
userRouter.get("/all-users", getUsers);
userRouter.get("/specific-user/:email", specificUser);

module.exports = userRouter;
