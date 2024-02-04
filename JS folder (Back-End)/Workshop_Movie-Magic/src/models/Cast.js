const mongoose = require('mongoose');

const castCreateSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        min: 15,
        max: 70
    },
    born: {
        type: String,
        require: true
    },
    nameInMovie: {
        type: String,
        require: true
    },
    imageURL: {
        type: String,
        require: true,
        match: /^https?:\/\//
    }
})

const Cast = mongoose.model('Cast', castCreateSchema);

module.exports = Cast;
