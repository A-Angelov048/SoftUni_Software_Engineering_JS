const router = require('express').Router();
const { createUser, getUser } = require('../services/authService');
const { getMessageError } = require('../utils/errorUtils');
const { isUser, isAuth } = require('../middllewares/authMiddleware');



router.get('/register', isUser, (req, res) => {

    res.render('register');
})

router.post('/register', isUser, async (req, res) => {

    const body = req.body;

    try {

        await createUser(body);
        res.redirect('/login');

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
        res.cookie('Auth', token);
        res.redirect('/');

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('login', { message, ...body });
    }
})

router.get('/logout', isAuth, (req, res) => {

    res.clearCookie('Auth');
    res.redirect('/');

})







module.exports = router;