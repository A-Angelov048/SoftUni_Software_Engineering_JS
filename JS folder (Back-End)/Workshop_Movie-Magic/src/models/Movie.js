const mongoose = require('mongoose');

const movieCreateSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'Title should be at least 5 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Title should be alphanumeric.']
    },
    genre: {
        type: String,
        required: true,
        minLength: [5, 'Genre should be at least 5 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Genre should be alphanumeric.']
    },
    director: {
        type: String,
        required: true,
        minLength: [5, 'Director should be at least 5 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Director should be alphanumeric.']
    },
    year: {
        type: Number,
        required: true,
        min: [1900, 'Year should be between 1900 and 2024'],
        max: [2024, 'Year should be between 1900 and 2024']
    },
    imageURL: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Image URL should stars with http://... or https://...']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'Rating should be between 1 and 5'],
        max: [5, 'Rating should be between 1 and 5']
    },
    description: {
        type: String,
        required: true,
        minLength: [20, 'Description should be at least 20 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Description should be alphanumeric.']
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
