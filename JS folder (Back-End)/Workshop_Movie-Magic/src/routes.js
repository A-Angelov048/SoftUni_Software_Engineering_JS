const router = require('express').Router();

const homeController = require('./controllers/homeController');
const createMovieController = require('./controllers/createMovieController');
const searchController = require('./controllers/searchController');
const castController = require('./controllers/castController');
const authController = require('./controllers/authController');

router.use(homeController);
router.use(createMovieController);
router.use(searchController);
router.use(castController);
router.use(authController);


router.get('/404', (req, res) => {

    res.render('404');
})

router.get('*', (req, res) => {
    
    res.redirect('/404');
})





module.exports = router;