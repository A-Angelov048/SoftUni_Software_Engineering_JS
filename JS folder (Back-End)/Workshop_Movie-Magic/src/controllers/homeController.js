const router = require('express').Router();
const { getAllMovies, findById } = require('../services/movieService');

router.get('/', async (req, res) => {

    try {

        const data = await getAllMovies().lean();
        res.render('home', { data });
    } catch (error) {
        console.log(error.message);
    }
})

router.get('/about', (req, res) => {

    res.render('about');
})

router.get('/details/:id', async (req, res) => {

    const idMovie = req.params.id;

    try {

        const data = await findById(idMovie).lean();
        res.render('details', { data });
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;