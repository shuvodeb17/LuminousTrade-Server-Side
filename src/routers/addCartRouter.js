const express = require("express");
const addCartRouter = express.Router();
const {
  addCartProducts,
  specificUserProduct,
  createPayment,
  savePaymentInfo,
  cartDeleteProduct,
  specificUserPaymentInfo,
} = require("../controllers/addCartController");
const { verifyJWT } = require("../middleware/jwtMiddleware");

addCartRouter.post("/add-cart", addCartProducts);
addCartRouter.get("/add-cart-products", specificUserProduct);
addCartRouter.post("/create-payment", createPayment);
addCartRouter.post("/save-payment-info", savePaymentInfo);
addCartRouter.delete("/cart-delete-product/:id", cartDeleteProduct);
addCartRouter.get(
  "/specific-user-payment-info",
  verifyJWT,
  specificUserPaymentInfo
);

module.exports = addCartRouter;
