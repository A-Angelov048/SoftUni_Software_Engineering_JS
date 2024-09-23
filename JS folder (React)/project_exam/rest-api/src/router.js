const router = require('express').Router();

const authController = require('./controllers/authController');
const furnitureController = require('./controllers/furnitureController');
const reviewsController = require('./controllers/reviewsController');

router.use('/users', authController);
router.use('/furniture', furnitureController);
router.use('/reviews', reviewsController);


module.exports = router;