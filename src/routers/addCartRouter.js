const express = require("express");
const addCartRouter = express.Router();
const { addCartProducts,specificUserProduct } = require("../controllers/addCartController");

addCartRouter.post("/add-cart", addCartProducts);
addCartRouter.get("/add-cart-products", specificUserProduct);

module.exports = addCartRouter;
