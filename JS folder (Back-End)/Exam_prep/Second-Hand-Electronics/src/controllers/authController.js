const router = require('express').Router();
const { createUser, getUser } = require('../services/authService');
const { getMessageError } = require('../utils/errorUtils');
const { isUser, isAuth } = require('../middlewares/authMiddleware');



router.get('/register', isUser, (req, res) => {

    res.render('register');
})

router.post('/register', isUser, async (req, res) => {

    const body = req.body;

    try {

        const token = await createUser(body);
        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('register', { message, ...body });
    }

})

router.get('/login', isUser, (req, res) => {

    res.render('login');
})

router.post('/login', isUser, async (req, res) => {

    const body = req.body;

    try {

        const token = await getUser(body);
        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('login', { message, ...body });
    }
})

router.get('/logout', isAuth, (req, res) => {

    res.clearCookie('auth');
    res.redirect('/');

})


module.exports = router;