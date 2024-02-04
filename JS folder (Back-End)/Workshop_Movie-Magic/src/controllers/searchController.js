const router = require('express').Router();
const { getAllMovies } = require('../services/movieService');


router.get('/search', async (req, res) => {

    try {
        const data = await getAllMovies().lean();
        res.render('search', {data});
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;