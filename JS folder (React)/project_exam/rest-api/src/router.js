const router = require("express").Router();

const authController = require("./controllers/authController");
const furnitureController = require("./controllers/furnitureController");
const reviewsController = require("./controllers/reviewsController");
const ordersController = require("./controllers/ordersController");

router.use("/users", authController);
router.use("/furniture", furnitureController);
router.use("/reviews", reviewsController);
router.use("/orders", ordersController);

module.exports = router;
