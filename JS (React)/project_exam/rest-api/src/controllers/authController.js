const router = require('express').Router();
const { createUser, getUser, sendUser } = require('../services/authService');


router.post('/register', async (req, res) => {

    const body = req.body;

    try {

        const token = await createUser(body);
        const user = await sendUser(token);

        res.cookie('auth', token, { httpOnly: true });
        res.json(user);

    } catch (err) {
        console.log(err.errors);
    }

})

router.post('/login', async (req, res) => {

    const body = req.body;

    try {

        const token = await getUser(body);
        const user = await sendUser(token);

        res.cookie('auth', token, { httpOnly: true });
        res.json(user);

    } catch (err) {
        console.log(err.errors);
    }
})

router.get('/logout', (req, res) => {
    //ToDo make validation of the token
    res.clearCookie('auth');
    res.json({ ok: true });
})


module.exports = router;