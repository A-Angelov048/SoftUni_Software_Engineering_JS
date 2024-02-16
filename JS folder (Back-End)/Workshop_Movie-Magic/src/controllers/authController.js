const router = require('express').Router();
const { createUser, getUser } = require('../services/authService');
const { getMessageError } = require('../utils/errorUtils');


router.get('/register', (req, res) => {

    res.render('register');
})

router.post('/register', async (req, res) => {

    const body = req.body;

    try {

        await createUser(body);
        res.redirect('/login');

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('register', { message, ...body });
    }

})

router.get('/login', (req, res) => {

    res.render('login');
})

router.post('/login', async (req, res) => {

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

router.get('/logout', (req, res) => {

    res.clearCookie('Auth');
    res.redirect('/');

})







module.exports = router;