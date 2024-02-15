const mongoose = require('mongoose');

const castCreateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 15,
        max: 70
    },
    born: {
        type: String,
        required: true
    },
    nameInMovie: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?:\/\//
    }
})

const Cast = mongoose.model('Cast', castCreateSchema);

module.exports = Cast;
