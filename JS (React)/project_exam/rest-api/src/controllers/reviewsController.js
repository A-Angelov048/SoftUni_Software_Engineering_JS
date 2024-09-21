const router = require('express').Router();
const { createReview } = require('../services/reviewsService');


router.post('/save-review/:id', async (req, res) => {

    const body = req.body;
    const furnitureId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await createReview({ ...body, ownerReview: userId }, furnitureId);

        res.json(result);

    } catch (err) {
        console.log(err.errors);
    }
})

module.exports = router;
