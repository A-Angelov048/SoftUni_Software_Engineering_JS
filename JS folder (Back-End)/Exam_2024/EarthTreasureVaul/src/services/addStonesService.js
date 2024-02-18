const Stones = require('../models/Stones');


exports.createStone = (body, userId) => {

    const newBody = {
        ...body,
        owner: userId
    }

    return Stones.create(newBody);
}