const router = require('express').Router();


router.get('/', (req, res) => {

    res.render('home');
})

router.get('/about', (req, res) => {

    res.render('about');
})

router.get('/details/:id', (req, res) => {

    res.render('details');
})


module.exports = router;