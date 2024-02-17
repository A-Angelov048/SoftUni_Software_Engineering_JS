const Electronics = require('../models/Electronics');


exports.searchProduct = (name, type) => {
    const query = {}

    if (name) {
        query.name = new RegExp(name, 'i');
    }

    if (type) {
        query.type = new RegExp(type, 'i');
    }

    return Electronics.find(query);
}