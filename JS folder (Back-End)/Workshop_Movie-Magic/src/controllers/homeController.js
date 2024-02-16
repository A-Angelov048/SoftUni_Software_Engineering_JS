const router = require('express').Router();
const { getAllMovies, findById } = require('../services/movieService');
const { getMessageError } = require('../utils/errorUtils');



router.get('/', async (req, res) => {

    try {

        const data = await getAllMovies().lean();
        res.render('home', { data });
    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.get('/about', (req, res) => {

    res.render('about');
})

router.get('/details/:id', async (req, res) => {

    const idMovie = req.params.id;
    const userID = req.user?._id;

    try {

        const data = await findById(idMovie).lean();
        const isOwner = data.creatorId && data.creatorId == userID;
        res.render('details', { data, isOwner });
    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})


module.exports = router;