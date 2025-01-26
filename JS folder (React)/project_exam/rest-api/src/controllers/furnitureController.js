const router = require('express').Router();
const { getAllData, getOne, buyFurniture, editFurniture, deleteFurniture, getLatest, createFurniture, searchFurniture, wishlistFurniture } = require('../services/furnitureService');


router.get('/latest', async (req, res) => {


    try {

        const data = await getLatest();
        res.json(data);

    } catch (err) {
        console.log(err.errors);
    }
})

router.get('/', async (req, res) => {

    const { page, limit } = req.query;

    try {

        const [length, furniture] = await getAllData(page, limit);

        res.status(200).json({
            status: 'success',
            length: length,
            data: furniture
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
})

router.post('/', async (req, res) => {

    const body = req.body;
    const userId = req.user._id;

    try {

        await createFurniture({ ...body, owner: userId }, userId);
        res.json({ ok: true });

    } catch (err) {
        console.log(err.errors);
    }
})

router.get('/:id', async (req, res) => {

    const furnitureId = req.params.id;

    try {

        const furniture = await getOne(furnitureId);
        res.json(furniture);

    } catch (err) {
        console.log(err.errors);
    }
})

router.put('/edit/:id', async (req, res) => {

    const body = req.body;
    const furnitureId = req.params.id;

    try {

        await editFurniture(furnitureId, body);
        res.json({ ok: true });

    } catch (err) {
        console.log(err.errors);
    }

})

router.delete('/delete/:id', async (req, res) => {

    const furnitureId = req.params.id;
    const userId = req.user._id;

    try {

        await deleteFurniture(furnitureId, userId);
        res.json({ ok: true });

    } catch (err) {
        console.log(err.errors);
    }
})


router.get('/buy/:id', async (req, res) => {

    const furnitureId = req.params.id;
    const userId = req.user._id;

    try {

        await buyFurniture(furnitureId, userId);
        res.json({ ok: true });

    } catch (err) {
        console.log(err.errors);
    }
})

router.get('/wishlist/:id', async (req, res) => {

    const furnitureId = req.params.id;
    const userId = req.user._id;

    try {

        const result = await wishlistFurniture(furnitureId, userId);

        if (result === 'add') {
            res.status(200).json({
                status: 'success',
                message: 'Successfully add furniture to wishlist'
            });
        } else {
            res.status(200).json({
                status: 'success',
                message: 'Successfully remove furniture from wishlist'
            });
        }

    } catch (err) {
        console.log(err.errors);
    }
})

router.post('/search', async (req, res) => {

    const body = req.body;

    try {

        const data = await searchFurniture(body);
        res.json(data);

    } catch (err) {
        console.log(err.errors);
    }
})


module.exports = router;