const router = require('express').Router();
const { searchStone } = require('../services/searchService');


router.get('/search/stone', async (req, res) => {

    const { name } = req.query;

    try {

        const data = await searchStone(name).lean();
        res.render('search', { data, name });

    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})


module.exports = router;