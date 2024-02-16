const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        minLength: [10, 'Email should be at least 10 characters long.'],
        match: [/\w+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Email should be alphanumeric and end with @email address.com or etc.']
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Password should be at least 6 characters long.'],
        match: [/^[a-zA-Z0-9]+$/, 'Password should be alphanumeric.']
    }
})

userSchema.pre('save', async function () {

    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;