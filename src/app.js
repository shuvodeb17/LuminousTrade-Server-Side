const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const imageRouter = require("./routers/multerImageRouters");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/images", express.static("./public/images"));
// app.use("/images", express.static("D:/phero-assignment/LuminousTrade/server-side/public/images"));


//
app.use("/", userRouter);
app.use("/", imageRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
