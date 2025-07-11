const router = require("express").Router();
const { createOrder, getAllOrders } = require("../services/ordersService");

router.get("/", async (req, res) => {
  const { date, deliveryStatus, page, limit } = req.query;
  const user = req.user;
  const regex = /^(confirmed|pre-order|in-transit)$/;
  const filter = {};

  if (user.role !== "Admin") {
    filter["deliveryInfo.owner"] = user._id;
  }

  if (regex.test(deliveryStatus)) {
    filter.status = deliveryStatus;
  } else {
    delete filter.status;
  }

  if (date === "last7") {
    filter.createdAt = { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) };
  } else if (date === "last30") {
    filter.createdAt = {
      $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    };
  } else if (date === "last90") {
    filter.createdAt = {
      $gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
    };
  } else if (date === "last180") {
    filter.createdAt = {
      $gte: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
    };
  } else {
    delete filter.createdAt;
  }

  try {
    const [length, order] = await getAllOrders(page, limit, filter);

    res.status(200).json({
      status: 200,
      length: length,
      data: order,
    });
  } catch (err) {
    if (err.message === "Orders not found.") {
      res.status(200).json({ message: err.message });
    } else {
      res.status(404).json({ message: err.message });
    }
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const userId = req.user?._id;

  try {
    const result = await createOrder(body, userId);
    res.status(201).json({ orderId: result.orderIdClient, ok: true });
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const orderId = req.params.id;

  try {
  } catch (err) {
    console.log(err.errors);
  }
});

module.exports = router;
