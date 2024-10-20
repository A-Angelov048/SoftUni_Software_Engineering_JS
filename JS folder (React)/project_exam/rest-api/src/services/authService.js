require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');



exports.createUser = async (body) => {

    const [username, email] = await Promise.all([
        User.findOne({ username: body.username }),
        User.findOne({ email: body.email })
    ])

    if (!!username) {
        throw new Error('Username already exists!');
    }

    if (!!email) {
        throw new Error('Email already exists!');
    }

    const createdUser = await User.create(body);

    const token = generateToken(createdUser);

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

    const token = generateToken(updatedUser);
    
    return token;
}

exports.sendUser = async (token) => {

    const user = await jwt.verify(token, process.env.SECRET);
    return user;
}

exports.editProfile = async (userId, body) => {

    const username = await User.findOne({ username: body.username });

    if (!!username && username._id.valueOf() !== userId) {
        throw new Error('Username already exists!');
    }

    const result = await User.findByIdAndUpdate(userId, body, { returnDocument: 'after' });

    const token = generateToken(result);

    return token;

}

exports.getCurrentUser = (userId) => User.findById(userId).populate({ path: 'furniture', select: 'name price imageUrl' }).populate({ path: 'wishlist', select: 'name price imageUrl' });

async function generateToken(user) {

    const payload = {
        _id: user._id,
        imageProfile: user.imageProfile,
        username: user.username,
        location: user.location,
    };

    return jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
}