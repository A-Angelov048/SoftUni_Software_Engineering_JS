const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { cacheControl } = require("../middlewares/cacheControlMiddleware");
const { auth } = require("../middlewares/authMiddleware");

function expressConfig(app, CLIENT_URL) {
  app.use(cors({ origin: CLIENT_URL, credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.disable("etag");
  app.use(cacheControl);
  app.use(auth);
}

module.exports = expressConfig;
