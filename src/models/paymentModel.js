const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  email: {
    type: String,
  },
  price: {
    type: String,
  },
  trsId: {
    type: String,
  },
});

const payments = model("payments", paymentSchema);

module.exports = { payments };
