const router = require("express").Router();
const {
  createUser,
  getUser,
  editProfile,
  getCurrentUser,
  createDeliveryInfo,
  getDeliveryInfo,
} = require("../services/authService");

router.post("/register", async (req, res) => {
  const body = req.body;

  try {
    const [token, userToReturn] = await createUser(body);

    res.cookie("auth", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json(userToReturn);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const body = req.body;

  try {
    const [token, updatedUser] = await getUser(body);

    res.cookie("auth", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

router.get("/logout", (req, res) => {
  //ToDo make validation of the token
  res.clearCookie("auth", { httpOnly: true, sameSite: "none", secure: true });
  res.json({ ok: true });
});

router.post("/edit-profile", async (req, res) => {
  const userId = req.user?._id;
  const body = req.body;

  try {
    const [token, result] = await editProfile(userId, body);

    res.cookie("auth", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(result);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

router.get("/profile", async (req, res) => {
  const userId = req.user?._id;

  try {
    const user = await getCurrentUser(userId);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post("/delivery-info", async (req, res) => {
  const body = req.body;
  const userId = req.user?._id;

  try {
    await createDeliveryInfo(body, userId);
    res.json({ ok: true });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/delivery-info", async (req, res) => {
  const userId = req.user?._id;

  try {
    const result = await getDeliveryInfo(userId);

    if (!result) {
      return res.status(200).json({ data: {} });
    }

    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
