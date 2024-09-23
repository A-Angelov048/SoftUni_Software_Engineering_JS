const express = require('express');
const cookieParser = require('cookie-parser');
const { auth } = require('../middlewares/authMiddleware');
const cors = require('cors');


function expressConfig(app, originUrl) {

    app.use(cors({ origin: originUrl, credentials: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);
}

module.exports = expressConfig;



