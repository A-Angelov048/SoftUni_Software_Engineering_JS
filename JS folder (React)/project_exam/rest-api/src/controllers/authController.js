const router = require("express").Router();
const {
  createUser,
  getUser,
  sendUser,
  editProfile,
  getCurrentUser,
  createDeliveryInfo,
  getDeliveryInfo,
} = require("../services/authService");

router.post("/register", async (req, res) => {
  const body = req.body;

  try {
    const token = await createUser(body);
    const user = await sendUser(token);

    res.cookie("auth", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(user);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const body = req.body;

  try {
    const token = await getUser(body);
    const user = await sendUser(token);

    res.cookie("auth", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(user);
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
    const token = await editProfile(userId, body);
    const editedProfile = await sendUser(token);

    res.cookie("auth", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.json(editedProfile);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

router.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  const flag = req.params.id === req.user?._id;

  try {
    const user = await getCurrentUser(userId);

    const sendUser = {
      _id: user._id,
      username: user.username,
      location: user.location,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      imageProfile: user.imageProfile,
      orders: user.orders,
      role: user.role,
    };

    if (flag) {
      sendUser.wishlist = user.wishlist;
    }

    res.json(sendUser);
  } catch (err) {
    console.log(err.errors);
  }
});

router.post("/delivery-info", async (req, res) => {
  const body = req.body;
  const userId = req.user?._id;

  try {
    await createDeliveryInfo(body, userId);
    res.json({ ok: true });
  } catch (err) {
    console.log(err.errors);
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
    console.log(err.errors);
  }
});

module.exports = router;
