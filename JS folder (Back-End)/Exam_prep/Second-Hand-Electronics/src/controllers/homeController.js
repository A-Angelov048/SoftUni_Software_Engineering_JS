const router = require('express').Router();


router.get('/', async (req, res) => {

    try {

        res.render('home');
    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})


module.exports = router;