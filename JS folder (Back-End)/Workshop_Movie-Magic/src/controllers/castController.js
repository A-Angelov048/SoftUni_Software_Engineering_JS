const router = require('express').Router();
const { createCast } = require('../services/castService');
const { findById } = require('../services/movieService');


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

router.get('/attach/cast/:id', async (req, res) => {

    const idMovie = req.params.id;

    try {
        const data = await findById(idMovie).lean();
        res.render('cast-attach', { data });
    } catch (error) {
        console.log(error.message);
    }

})


module.exports = router;