const router = require("express").Router();
const {
  getAllData,
  getOne,
  editFurniture,
  deleteFurniture,
  getLatest,
  createFurniture,
  searchFurniture,
  wishlistFurniture,
  getBasketItems,
} = require("../services/furnitureService");

router.get("/latest", async (req, res) => {
  try {
    const data = await getLatest();
    res.json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  const { page, limit, search } = req.query;
  const filter = {};

  if (search) {
    filter.name = { $regex: search, $options: "i" };
  }

  try {
    const [length, furniture] = await getAllData(page, limit, filter);

    res.status(200).json({
      status: 200,
      length: length,
      data: furniture,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/search", async (req, res) => {
  const { product } = req.query;

  try {
    const data = await searchFurniture(product);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const furnitureId = req.params.id;

  try {
    const furniture = await getOne(furnitureId);
    res.json(furniture);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/wishlist/:id", async (req, res) => {
  const furnitureId = req.params.id;
  const userId = req.user?._id;

  try {
    const result = await wishlistFurniture(furnitureId, userId);

    if (result === "add") {
      res.status(200).json({
        status: result,
        message: "Successfully add furniture to wishlist.",
      });
    } else {
      res.status(200).json({
        status: result,
        message: "Successfully remove furniture from wishlist.",
      });
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const userId = req.user?._id;

  try {
    await createFurniture({ ...body, owner: userId }, userId);
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post("/basket", async (req, res) => {
  const body = req.body;

  try {
    const data = await getBasketItems(body);

    res.json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.put("/edit/:id", async (req, res) => {
  const body = req.body;
  const furnitureId = req.params.id;

  try {
    await editFurniture(furnitureId, body);
    res.json({ ok: true });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const furnitureId = req.params.id;
  const userId = req.user?._id;

  try {
    await deleteFurniture(furnitureId, userId);
    res.json({ ok: true });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
