const router = require('express').Router();
const { saveMovie } = require('../services/movieService');
const { isAuth } = require('../middllewares/authMiddleware');


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
        console.log(error.message);
        res.redirect('/create');
    }
})

router.get('/edit/:id', (req, res) => {

    res.render('edit');
})



module.exports = router;