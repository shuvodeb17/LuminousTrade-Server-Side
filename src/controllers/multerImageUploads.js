const addProducts = require("../models/multerImageModel");
const { ObjectId } = require("mongodb");

const imagePost = async (req, res) => {
  try {
    const file = req.file;
    const { name, email, productName, price, title, details } = req.body;

    const newProduct = new addProducts({
      image: file.filename,
      name: name,
      email: email,
      productName: productName,
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

const searchProduct = async (req, res) => {
  try {
    const search = req.query.search || "";
    const searchRegExp = new RegExp(".*" + search + ".*", "i");
    const filter = {
      isAdmin: { $ne: true },
      $or: [
        { name: { $regex: searchRegExp } },
        { title: { $regex: searchRegExp } },
        { productName: { $regex: searchRegExp } }
      ],
    };
    const result = await addProducts.find(filter);
    res.status(200).json({
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

module.exports = { imagePost, getProducts, specificProduct, searchProduct };
