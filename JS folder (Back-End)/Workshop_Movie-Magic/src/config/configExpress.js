const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path')
const {auth} = require('../middllewares/authMiddleware');

function configExpress(app) {

    app.use(express.static(path.resolve('src/public')))
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth);

}

module.exports = configExpress;