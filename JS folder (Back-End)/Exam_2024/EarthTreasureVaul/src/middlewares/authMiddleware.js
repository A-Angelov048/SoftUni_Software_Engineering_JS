const jwt = require('../lib/jwt');
const { SECRET } = require('../config/secret');

exports.auth = async (req, res, next) => {

    const token = req.cookies['auth'];
    if (!token) {
        return next();
    }

    try {

        const verifyToken = await jwt.verify(token, SECRET);
        req.user = verifyToken;
        res.locals.verifyUser = true;
        res.locals.ifUser = true;

        next();

    } catch (error) {
        res.locals.ifUser = false;
        res.clearCookie('auth');
        res.redirect('login');
    }
}

exports.isAuth = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/login');
    }

    next();
}

exports.isUser = (req, res, next) => {

    if (req.user) {
        return res.redirect('/');
    }

    next();
}