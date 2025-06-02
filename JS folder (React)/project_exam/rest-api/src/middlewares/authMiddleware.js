require("dotenv").config();
const jwt = require("../lib/jwt");

exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];
  if (!token) {
    return next();
  }

  try {
    const verifyToken = await jwt.verify(token, process.env.SECRET);
    req.user = verifyToken;

    next();
  } catch (error) {
    res.clearCookie("auth", { httpOnly: true, sameSite: "none", secure: true });
    res.status(403).json(error.message);
  }
};
