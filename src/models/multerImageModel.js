const { Schema, model } = require("mongoose");

const addProductSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const addProducts = model("AddProduct", addProductSchema);

module.exports = addProducts;
