const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLength: [5, 'Username should be at least 5 characters long.'],
    },
    email: {
        type: String,
        required: true,
        minLength: [10, 'Email should be at least 10 characters long.'],
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password should be at least 6 characters long.'],
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
    },
    location: {
        type: String,
        required: false,
        minLength: [4, 'Location should be at least 4 characters long.'],
    },
    imageProfile: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    furniture: [{
        type: mongoose.Types.ObjectId,
        ref: 'Furniture',
    }],
    wishlist: [{
        type: mongoose.Types.ObjectId,
        ref: 'Furniture',
    }]
})

userSchema.pre('save', async function () {

    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;

})

const User = mongoose.model('User', userSchema);

module.exports = User;