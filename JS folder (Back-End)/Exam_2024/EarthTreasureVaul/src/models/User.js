const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        minLength: [10, 'Email should be at least 10 characters long.']
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password should be at least 4 characters long.'],
    }
})

userSchema.pre('save', async function () {

    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
})

const User = mongoose.model('User', userSchema);

module.exports = User;