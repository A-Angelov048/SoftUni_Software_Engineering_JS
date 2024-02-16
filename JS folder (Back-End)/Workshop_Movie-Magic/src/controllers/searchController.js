const router = require('express').Router();
const { searchMovie } = require('../services/movieService');


router.get('/search', async (req, res) => {

    try {
        
        const { title, genre, year } = req.query;
        const data = await searchMovie(title, genre, year).lean();
        res.render('search', { data, title, genre, year });
    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})



module.exports = router;