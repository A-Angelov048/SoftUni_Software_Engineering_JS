const mongoose = require('mongoose');


exports.getMessageError = (err) => {

    let message;

    if (err instanceof mongoose.MongooseError) {
        message = Object.values(err.errors)[0].message;
    } else if (err instanceof Error){
        message = err.message;
    }

    return message;
}