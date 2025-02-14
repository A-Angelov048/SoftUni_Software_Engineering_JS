const mongoose = require('mongoose');


const deliveryInfoSchema = new mongoose.Schema({

    'last-name': {
        type: String,
        require: true,
    },
    'first-name': {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    'zip-code': {
        type: String,
        require: true,
        match: [/^\d{4}$/, 'Invalid zip code (example: 1000)'],
    },
    region: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    neighborhood: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
        match: [/^\+359[- ]?\d{3}[- ]?\d{3}[- ]?\d{3}$/, 'Invalid phone number (example: +359111222333)'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

});


const DeliveryInfo = mongoose.model('DeliveryInfo', deliveryInfoSchema);

module.exports = DeliveryInfo;