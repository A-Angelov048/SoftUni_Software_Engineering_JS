const router = require('express').Router();
const { createReview } = require('../services/reviewsService');


router.post('/save-review/:id', async (req, res) => {

    const body = req.body;
    const owner = {
        _id: req.user._id,
        username: req.user.username,
        imageProfile: req.user.imageProfile
    };
    const furnitureId = req.params.id;

    try {

        const result = await createReview({ ...body, owner }, furnitureId);

        res.json(result);

    } catch (err) {
        console.log(err.errors);
    }
})

module.exports = router;
