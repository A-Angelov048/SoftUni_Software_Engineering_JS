const jwt = require('../lib/jwt');
const { SECRET } = require('../config/secret');

exports.auth = async (req, res, next) => {

    const token = req.cookies['Auth'];
    if (!token) {
        return next();
    }

    try {

        const verifyToken = await jwt.verify(token, SECRET);
        req.user = verifyToken;
        res.locals.verifyUser = true;

        next();

    } catch (error) {
        console.log(error);
        res.clearCookie('Auth');
        res.redirect('login');
    }
}

exports.isAuth = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/login');
    }

    next();
}