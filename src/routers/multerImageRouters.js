const multer = require("multer");
const express = require("express");
const path = require("path");
const { imagePost } = require("../controllers/multerImageUploads");
const imageRouter = express.Router();

const destinationDirectory = path.join(__dirname, "../public/images");

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

module.exports = imageRouter;