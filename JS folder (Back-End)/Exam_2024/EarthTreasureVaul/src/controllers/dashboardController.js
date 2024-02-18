const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getMessageError } = require('../utils/errorUtils');
const { getAllData, getOne, likeStone, editGetOne, editStone, deleteStone } = require('../services/dashboardService');



router.get('/dashboard', async (req, res) => {


    try {

        const data = await getAllData().lean();
        res.render('dashboard', { data });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.get('/details/:id', async (req, res) => {

    const stoneId = req.params.id;

    try {

        const stone = await getOne(stoneId).lean();
        const ifOwner = stone.owner && stone.owner == req.user?._id;
        const ifLike = !!stone.likedList.find(x => x == req.user?._id);

        res.render('details', { ...stone, ifOwner, ifLike });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.get('/like/stone/:id', isAuth, async (req, res) => {

    const userId = req.user._id;
    const stoneId = req.params.id;

    try {

        await likeStone(userId, stoneId);
        res.redirect(`/details/${stoneId}`);

    } catch (err) {

        const message = getMessageError(err);
        res.status(404).render('404', { message });
    }
})

router.get('/edit/stone/:id', isAuth, async (req, res) => {

    const stoneId = req.params.id;
    const userId = req.user._id;

    try {
        const body = await editGetOne(stoneId, userId);
        res.render('edit', { ...body });

    } catch (err) {

        const message = getMessageError(err);
        res.status(404).render('404', { message });
    }
})

router.post('/edit/stone/:id', isAuth, async (req, res) => {

    const body = req.body;
    const stoneId = req.params.id;

    try {

        await editStone(stoneId, body);
        res.redirect(`/details/${stoneId}`);

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('edit', { message, ...body });
    }

})

router.get('/delete/stone/:id', isAuth, async (req, res) => {

    const stoneId = req.params.id;
    const userId = req.user._id;

    try {

        await deleteStone(stoneId, userId);
        res.redirect('/dashboard');

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('404', { message });
    }
})


module.exports = router;