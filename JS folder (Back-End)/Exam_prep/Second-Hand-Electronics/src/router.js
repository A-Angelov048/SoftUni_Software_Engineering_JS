const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const createOfferController = require('./controllers/createOfferController');
const catalogController = require('./controllers/catalogController');
const searchController = require('./controllers/searchController');

router.use(homeController);
router.use(authController);
router.use(createOfferController);
router.use(catalogController);
router.use(searchController);

router.get('/404', (req, res) => {
    res.render('404');
})

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;