const router = require('express').Router();


router.get('/search', (req, res) => {

    res.render('search');
})


module.exports = router;