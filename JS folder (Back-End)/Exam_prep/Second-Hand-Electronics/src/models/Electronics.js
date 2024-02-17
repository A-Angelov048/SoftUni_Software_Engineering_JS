const mongoose = require('mongoose');

const electronicsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: [10, 'Name should be at least 10 characters long.']
    },
    type: {
        type: String,
        required: true,
        minLength: [2, 'Type should be at least 2 characters long.']

    },
    damages: {
        type: String,
        required: true,
        minLength: [10, 'Damages should be at least 10 characters long.']

    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Image URL should stars with http://... or https://...']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description should be between 10 and 200 characters long.'],
        maxLength: [200, 'Description should be between 10 and 200 characters long.']
    },
    production: {
        type: Number,
        required: true,
        min: [1900, 'Production should be between 1900 and 2023 characters long.'],
        max: [2023, 'Production should be between 1900 and 2023 characters long.']

    },
    exploitation: {
        type: Number,
        required: true,
        min: [0, 'Exploitation should be a positive number.']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price should be a positive number.']

    },
    buyingList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})

const Electronics = mongoose.model('Electronics', electronicsSchema);

module.exports = Electronics;