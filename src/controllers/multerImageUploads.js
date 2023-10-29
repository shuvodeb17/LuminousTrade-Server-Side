const addProducts = require("../models/multerImageModel");

const imagePost = async (req, res) => {
  try {
    const file = req.file;
    const { name } = req.body;

    const newProduct = new addProducts({
      name: name,
      image: file.filename,
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

module.exports = { imagePost };
