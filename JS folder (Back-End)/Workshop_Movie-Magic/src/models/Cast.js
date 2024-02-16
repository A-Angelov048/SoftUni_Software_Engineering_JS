const mongoose = require('mongoose');

const castCreateSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: [5, 'Name should be at least 5 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Name should be alphanumeric.']
    },
    age: {
        type: Number,
        required: true,
        min: [1, 'age should be between 1 and 120.'],
        max: [120, 'age should be between 1 and 120.']
    },
    born: {
        type: String,
        required: true,
        minLength: [5, 'Text should be at least 5 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Text should be alphanumeric.']
    },
    nameInMovie: {
        type: String,
        required: true,
        minLength: [5, 'Name should be at least 5 characters long'],
        match: [/[a-zA-Z0-9\s]+/, 'Name should be alphanumeric.']
    },
    imageURL: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Image URL should stars with http://... or https://...']
    }
})

const Cast = mongoose.model('Cast', castCreateSchema);

module.exports = Cast;
