const { Schema, model } = require("mongoose");

const addProductSchema = new Schema({
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
  details: {
    type: String,
  },
});

const addProducts = model("AddProduct", addProductSchema);

module.exports = addProducts;
