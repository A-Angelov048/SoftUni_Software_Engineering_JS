const router = require('express').Router();
const { createUser } = require('../services/authService');
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
        res.render('register', { message, ...body });
    }

})

router.get('/login', (req, res) => {

    res.render('login');
})







module.exports = router;