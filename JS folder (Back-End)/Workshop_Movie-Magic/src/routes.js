const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createMovieController = require('./controllers/createMovieController');


router.use(homeController);
router.use(createMovieController);







module.exports = router;