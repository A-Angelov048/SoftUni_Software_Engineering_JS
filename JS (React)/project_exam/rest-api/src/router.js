const router = require('express').Router();

const authController = require('./controllers/authController');
const furnitureController = require('./controllers/furnitureController');

router.use('/users',authController);
router.use('/furniture', furnitureController);

module.exports = router;