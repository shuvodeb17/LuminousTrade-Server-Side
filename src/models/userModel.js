const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const Users = model("Users", usersSchema);

module.exports = Users;
