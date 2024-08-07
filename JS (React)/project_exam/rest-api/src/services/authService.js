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

    const createdUser = await User.create(body);

    const token = await generateToken(createdUser);

    return token;
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

    const updatedUser = await User.findByIdAndUpdate(user._id, { lastLogin: Date.now() }, { returnDocument: 'after' });

    const token = await generateToken(updatedUser);

    return token;
}

exports.sendUser = async (token) => {

    const user = await jwt.verify(token, SECRET);
    return user;
}

exports.editProfile = async (userId, body) => {

    const result = await User.findByIdAndUpdate(userId, body, { returnDocument: 'after' });

    const token = await generateToken(result);

    return token;

}

exports.getCurrentUser = async (userId) => {

    const user = await User.findById(userId).populate('furniture');
    
    const token = await generateToken(user);

    return token;
}

async function generateToken(user) {
    const payload = {
        _id: user._id,
        imageProfile: user.imageProfile,
        username: user.username,
        location: user.location,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
        furniture: user.furniture
    }

    return jwt.sign(payload, SECRET, { expiresIn: '1d' });
}