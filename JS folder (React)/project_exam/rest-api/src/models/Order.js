const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  deliveryInfo: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  furniture: {
    type: Array,
    required: true,
  },
  furniturePrice: {
    type: Number,
    required: true,
  },
  shippingPrice: {
    type: Number,
    required: true,
  },
  orderIdClient: {
    type: String,
    required: true,
    unique: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: Date,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
