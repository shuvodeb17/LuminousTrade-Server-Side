const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
