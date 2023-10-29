const addProducts = require("../models/multerImageModel");

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



module.exports = { imagePost };
