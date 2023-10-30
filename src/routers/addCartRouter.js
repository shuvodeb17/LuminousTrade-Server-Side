const express = require("express");
const addCartRouter = express.Router();
const {
  addCartProducts,
  specificUserProduct,
  createPayment,
  savePaymentInfo,
  cartDeleteProduct,
} = require("../controllers/addCartController");

addCartRouter.post("/add-cart", addCartProducts);
addCartRouter.get("/add-cart-products", specificUserProduct);
addCartRouter.post("/create-payment", createPayment);
addCartRouter.post("/save-payment-info", savePaymentInfo);
addCartRouter.delete("/cart-delete-product/:id", cartDeleteProduct);

module.exports = addCartRouter;
