const router = require('express').Router();


router.get('/create/cast', (req, res) => {

    res.render('cast-create');
})


module.exports = router;