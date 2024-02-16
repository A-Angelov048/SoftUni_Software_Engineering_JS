const router = require('express').Router();
const { createCast, getAllCast, attachCast } = require('../services/castService');
const { findById } = require('../services/movieService');
const { isAuth } = require('../middlewares/authMiddleware');
const { getMessageError } = require('../utils/errorUtils');



router.get('/create/cast', isAuth, (req, res) => {

    res.render('cast-create');
})

router.post('/create/cast', isAuth, async (req, res) => {

    const data = req.body;

    try {

        await createCast(data);
        res.redirect('/');

    } catch (err) {
        const message = getMessageError(err);
        res.status(400).render('cast-create', { message, ...data });
    }
})

router.get('/attach/cast/:id', isAuth, async (req, res) => {

    const idMovie = req.params.id;
    // TODO: validate if cast is already added
    try {
        const data = await findById(idMovie).lean();
        const casts = await getAllCast().lean();
        res.render('cast-attach', { data, casts });
    } catch (err) {
        console.log(err.message);
        res.status(404).redirect('/404');
    }

})

router.post('/attach/cast/:id', isAuth, async (req, res) => {

    const idMovie = req.params.id;
    const idCast = req.body.cast
    // TODO: validate castId if exists
    try {
        await attachCast(idMovie, idCast);
        res.redirect(`/attach/cast/${idMovie}`);
    } catch (err) {
        console.log(err.message);
        res.status(404).redirect('/404');
    }
})


module.exports = router;