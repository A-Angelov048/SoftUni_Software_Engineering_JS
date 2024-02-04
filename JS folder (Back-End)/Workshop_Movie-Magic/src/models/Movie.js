const mongoose = require('mongoose');

const movieCreateSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    director: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true,
        min: 1980,
        max: 2030
    },
    imageURL: {
        type: String,
        require: true,
        match: /^https?:\/\//
    },
    rating: {
        type: Number,
        require: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        require: true,
        max: 1000
    },

})


const Movie = mongoose.model('Movie', movieCreateSchema);

module.exports = Movie;
