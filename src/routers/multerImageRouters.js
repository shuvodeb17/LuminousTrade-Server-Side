const multer = require("multer");
const express = require("express");
const path = require("path");
const {
  imagePost,
  getProducts,
  specificProduct,
  searchProduct
} = require("../controllers/multerImageUploads");
const imageRouter = express.Router();

const destinationDirectory = path.join(__dirname, "../public/images");
// const destinationDirectory = path.join(__dirname, "../../uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, destinationDirectory);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

imageRouter.post("/upload", upload.single("file"), imagePost);
imageRouter.get("/all-products", getProducts);
imageRouter.get("/specific-product/:id", specificProduct);
imageRouter.get("/search-product", searchProduct);

module.exports = imageRouter;
