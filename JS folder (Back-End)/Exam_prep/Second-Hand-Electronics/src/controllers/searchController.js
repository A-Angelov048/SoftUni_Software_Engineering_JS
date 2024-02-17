const router = require('express').Router();
const { searchProduct } = require('../services/searchService');


router.get('/search', async (req, res) => {


    try {

        const { name, type } = req.query;
        const data = await searchProduct(name, type).lean();
        res.render('search', { data, name, type });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})


module.exports = router;