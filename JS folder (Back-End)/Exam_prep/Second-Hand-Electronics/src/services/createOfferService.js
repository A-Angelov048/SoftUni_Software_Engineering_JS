const Electronics = require('../models/Electronics');


exports.createOffer = (body, userId) => {

    const newBody = {
        ...body,
        owner: userId
    }

    return Electronics.create(newBody);
}