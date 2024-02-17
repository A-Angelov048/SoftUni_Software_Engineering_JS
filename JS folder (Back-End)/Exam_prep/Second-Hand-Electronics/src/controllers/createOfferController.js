const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getMessageError } = require('../utils/errorUtils');
const { createOffer } = require('../services/createOfferService');



router.get('/create/offer', isAuth, (req, res) => {

    res.render('create');
})

router.post('/create/offer', isAuth, async (req, res) => {

    const userId = req.user;
    const body = req.body;

    try {

        await createOffer(body, userId);
        res.redirect('/catalog');
    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('create', { message, ...body });
    }
})

module.exports = router;