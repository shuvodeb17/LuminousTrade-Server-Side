const mongoose = require('mongoose');
const {DB_URL} = require('../secret');
require("dotenv").config({ path: "../.env" });

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(DB_URL, options);
    console.log("Connected to DB");

    mongoose.connection.on("error", (error) => {
      console.error(`DB Connection Error: ${error}`);
    });
  } catch (error) {
    console.error(`Could not connect to DB: ${error}`);
  }
};

module.exports = connectDB;