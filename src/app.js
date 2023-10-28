const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
