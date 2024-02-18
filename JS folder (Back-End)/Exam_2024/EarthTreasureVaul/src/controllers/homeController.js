const router = require('express').Router();
const { getLatest } = require('../services/dashboardService');



router.get('/', async (req, res) => {

    try {

        const data = await getLatest().lean();
        res.render('home', { data });
    } catch (err) {

        console.log(err.message);
        res.status(404).redirect('/404');
    }
})


module.exports = router;