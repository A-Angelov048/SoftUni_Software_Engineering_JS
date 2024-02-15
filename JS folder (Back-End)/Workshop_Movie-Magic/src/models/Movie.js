const mongoose = require('mongoose');

const movieCreateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1980,
        max: 2030
    },
    imageURL: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: true,
        max: 1000
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})


const Movie = mongoose.model('Movie', movieCreateSchema);

module.exports = Movie;
