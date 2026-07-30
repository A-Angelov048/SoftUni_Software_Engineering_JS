const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const expressConfig = require("./config/expressConfig");
const router = require("./router");
const localServerStart = require("./localApi");

const app = express();
const DB_URL = process.env.DATABASE_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const PORT = process.env.PORT || 3000;

expressConfig(app, CLIENT_URL);
app.use(router);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connected.");
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
    process.exit(1);
  });

app.listen(PORT, () =>
  console.log(
    `Express server running on port: ${PORT}. You can make requests to http://localhost:${PORT}`,
  ),
);
