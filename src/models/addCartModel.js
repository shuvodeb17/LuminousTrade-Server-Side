const { Schema, model } = require("mongoose");

const addCartSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  price: {
    type: Number,
  },
  title: {
    type: String,
  },
});

const addCart = model("addCart", addCartSchema);

module.exports = addCart;
