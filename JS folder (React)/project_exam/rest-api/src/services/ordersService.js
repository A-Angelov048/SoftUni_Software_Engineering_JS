require("dotenv").config();
const orderid = require("order-id");
const Order = require("../models/Order");
const User = require("../models/User");

exports.getAllOrders = async (page = 1, limit = 6, filter) => {
  const skip = (page - 1) * limit;
  const regex = /^\d+$/;

  if (!regex.test(page) || !regex.test(limit)) {
    throw new Error("Page do not exists.");
  }

  try {
    const [orderCount, order] = await Promise.all([
      Order.find(filter).countDocuments(),
      Order.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
    ]);

    return [orderCount, order];
  } catch (error) {
    throw error;
  }
};

exports.createOrder = async (body, userId) => {
  const orderIdClient = orderid(process.env.SECRET).generate();
  const filter = { role: "Admin" };

  try {
    const result = await Order.create({ ...body, orderIdClient });

    await Promise.all([
      User.findByIdAndUpdate(userId, { $addToSet: { orders: result._id } }),
      User.updateMany(filter, { $addToSet: { orders: result._id } }),
    ]);

    return result;
  } catch (error) {
    throw error;
  }
};

exports.getOrder = (orderId) => Order.findById(orderId);

exports.editOrder = (furnitureId, body) =>
  Order.findByIdAndUpdate(furnitureId, body, { runValidators: true });
