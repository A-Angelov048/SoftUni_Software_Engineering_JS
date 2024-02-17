const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getMessageError } = require('../utils/errorUtils');
const { getAllData, getOne, buyProduct, editProduct, editGetOne, deleteProduct } = require('../services/catalogService');


router.get('/catalog', async (req, res) => {


    try {

        const data = await getAllData().lean();
        res.render('catalog', { data });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.get('/details/:id', async (req, res) => {

    const productId = req.params.id;

    try {

        const product = await getOne(productId).lean();
        const ifOwner = product.owner && product.owner == req.user?._id;
        const ifBuy = !!product.buyingList.find(x => x == req.user?._id);

        res.render('details', { ...product, ifOwner, ifBuy });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.get('/buy/product/:id', isAuth, async (req, res) => {

    const userId = req.user._id;
    const productId = req.params.id;

    try {

        await buyProduct(userId, productId);
        res.redirect(`/details/${productId}`);

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})

router.get('/edit/product/:id', isAuth, async (req, res) => {

    const productId = req.params.id;
    const userId = req.user._id;

    try {
        const body = await editGetOne(productId, userId);
        res.render('edit', { ...body });

    } catch (err) {

        const message = getMessageError(err);
        res.status(404).render('404', { message });
    }
})

router.post('/edit/product/:id', isAuth, async (req, res) => {

    const body = req.body;
    const productId = req.params.id;

    try {

        await editProduct(productId, body);
        res.redirect(`/details/${productId}`);

    } catch (err) {

        const message = getMessageError(err);
        res.status(400).render('edit', { message, ...body });
    }

})

router.get('/delete/product/:id', isAuth, async (req, res) => {

    const productId = req.params.id;
    const userId = req.user._id;

    try {

        await deleteProduct(productId, userId);
        res.redirect('/catalog');

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})




module.exports = router;
