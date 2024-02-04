const router = require('express').Router();
const { saveMovie } = require('../services/movieService');


router.get('/create', (req, res) => {

    res.render('create');
})

router.post('/create', async (req, res) => {

    const data = req.body;

    try {

        await saveMovie(data);
        res.redirect('/');

    } catch (error) {
        console.log(error.message);
        res.redirect('/create');
    }
})



module.exports = router;