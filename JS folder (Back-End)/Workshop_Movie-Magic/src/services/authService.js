const User = require('../models/User');
const bcrypt = require('bcrypt');
const { SECRET } = require('../config/secret');
const jwt = require('../lib/jwt');



exports.createUser = async (body) => {

    const user = await User.findOne({ email: body.email });

    if (user) {
        throw new Error('Email already exists!');
    }

    if (body.password !== body.rePassword) {
        throw new Error('Passwords should match!');
    }

    return User.create(body);

}

exports.getUser = async (body) => {

    const user = await User.findOne({ email: body.email });


    if (!user) {
        throw new Error('Email or Password invalid.');
    }

    const validatePassword = await bcrypt.compare(body.password, user.password);

    if (!validatePassword) {
        throw new Error('Email or Password invalid.');
    }

    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    return token;
}

