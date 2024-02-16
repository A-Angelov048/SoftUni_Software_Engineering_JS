const router = require('express').Router();
const { saveMovie, findById, editMovie, deleteMovie } = require('../services/movieService');
const { isAuth } = require('../middlewares/authMiddleware');
const { getMessageError } = require('../utils/errorUtils');


router.get('/create', isAuth, (req, res) => {

    res.render('create');
})

router.post('/create', isAuth, async (req, res) => {

    const data = req.body;
    const userID = req.user._id;

    try {

        await saveMovie(data, userID);
        res.redirect('/');

    } catch (err) {
        const message = getMessageError(err);
        res.status(400).render('create', { message, ...data });;
    }
})

router.get('/edit/:id', isAuth, async (req, res) => {

    const idMovie = req.params.id;

    try {

        const data = await findById(idMovie).lean();
        res.render('edit', { data });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.post('/edit/:id', isAuth, async (req, res) => {

    const idMovie = req.params.id;
    const data = req.body;

    try {

        await editMovie(idMovie, data);
        res.redirect(`/details/${idMovie}`);

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('edit', { message, data });
    }
})

router.get('/delete/:id', isAuth, async (req, res) => {

    const idMovie = req.params.id;

    try {

        await deleteMovie(idMovie);
        res.redirect('/');

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})



module.exports = router;