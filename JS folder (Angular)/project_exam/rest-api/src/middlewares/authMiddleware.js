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
        
        next();

    } catch (error) {
        res.clearCookie('auth');
    }
}
