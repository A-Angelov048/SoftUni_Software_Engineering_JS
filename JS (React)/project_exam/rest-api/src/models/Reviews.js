const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({

    rating: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
        minLength: [8, 'Review should be at least 8 characters long.'],
    },
    owner: {
        type: Object,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
