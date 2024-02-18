const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getMessageError } = require('../utils/errorUtils');
const {createStone} = require('../services/addStonesService');



router.get('/add/stones', isAuth, (req, res) => {

    res.render('create');
})

router.post('/add/stones', isAuth, async (req, res) => {

    const userId = req.user;
    const body = req.body;

    try {

        await createStone(body, userId);
        res.redirect('/dashboard');

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('create', { message, ...body });
    }
})

module.exports = router;