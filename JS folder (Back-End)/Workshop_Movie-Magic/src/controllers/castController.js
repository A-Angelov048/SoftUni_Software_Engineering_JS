const router = require('express').Router();
const { createCast } = require('../services/castService');


router.get('/create/cast', (req, res) => {

    res.render('cast-create');
})

router.post('/create/cast', async (req, res) => {

    const data = req.body;

    try {

        await createCast(data);
        res.redirect('/');

    } catch (error) {
        console.log(error.message);
        res.redirect('/create/cast');
    }
})


module.exports = router;