const Stones = require('../models/Stones');


exports.searchStone = (name) => {
    const query = {}

    if (name) {
        query.name = new RegExp(name, 'i');
    }

    return Stones.find(query);
}