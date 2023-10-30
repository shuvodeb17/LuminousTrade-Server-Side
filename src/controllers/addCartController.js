const addCart = require("../models/addCartModel");
const { payments } = require("../models/paymentModel");
const stripe = require("stripe")(
  "sk_test_51O6r3OEfgjC5M1Qi6lMWoX1Yl5HCsNADcHsjH5BhCZvHnYswNxwUhIZ6lv6V1XaTC0cqgBLhHq1eIdgzTVJCOp3500blpEVlDY"
);
const { MongoClient, ObjectId } = require("mongodb");

const addCartProducts = async (req, res) => {
  try {
    const { _id, image, name, productName, title, price, details } =
      req.body.allProductInfo;
    const { email } = req.body.userInfo;

    const newCart = new addCart({
      image: image,
      name: name,
      productName: productName,
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

const cartDeleteProduct = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const result = await addCart.deleteOne(filter);
  res.send(result);
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

const createPayment = async (req, res) => {
  const { price, email } = req.body;
  console.log(price);

  if (typeof price !== "number" || price < 0.01) {
    // Handle invalid price input
    res.status(400).send("Invalid price input");
    return;
  }

  const amount = price * 100;
  console.log(amount);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount, // Adjust the amount as needed
    currency: "usd",
    payment_method_types: ["card"],
  });

  // Create and save the payment record in the database

  try {
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send("Error saving payment data to the database");
  }
};

const savePaymentInfo = async (req, res) => {
  const { price, email, trsId } = req.body;
  const amount = price * 100;
  console.log(amount);
  console.log(price);
  console.log(email);
  const newPayment = new payments({
    price: price,
    email: email,
    trsId: trsId,
  });
  await newPayment.save();
  res.status(200).json({
    message: newPayment,
  });
};

module.exports = {
  addCartProducts,
  specificUserProduct,
  createPayment,
  savePaymentInfo,
  cartDeleteProduct,
};
