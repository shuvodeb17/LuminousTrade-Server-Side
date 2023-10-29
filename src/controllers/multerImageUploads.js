const addProducts = require("../models/multerImageModel");
const { ObjectId } = require('mongodb');

const imagePost = async (req, res) => {
  try {
    const file = req.file;
    const { name, email, price, title, details } = req.body;

    const newProduct = new addProducts({
      image: file.filename,
      name: name,
      email: email,
      price: price,
      title: title,
      details: details,
    });
    await newProduct.save();
    res.status(200).json({
      message: "Product added successful",
      newProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (req, res) => {
  try {
    const result = await addProducts.find();
    res.status(200).json({
      message: "All products",
      products: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const specificProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const product = await addProducts.findOne(query);
    res.status(200).json({
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = { imagePost, getProducts, specificProduct };
