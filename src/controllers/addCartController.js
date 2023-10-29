const addCart = require("../models/addCartModel");

const addCartProducts = async (req, res) => {
  try {
    const { _id, image, name, title, price, details } = req.body.allProductInfo;
    const { email } = req.body.userInfo;

    const newCart = new addCart({
      image: image,
      name: name,
      email: email,
      price: price,
      title: title,
    });
    await newCart.save();
    res.status(200).json({
      message: "Cart Product added",
      newCart,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

const specificUserProduct = async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query?.email };
  }
  const result = await addCart.find(query);
  res.status(200).json({
    result,
  });
};

module.exports = { addCartProducts, specificUserProduct };
