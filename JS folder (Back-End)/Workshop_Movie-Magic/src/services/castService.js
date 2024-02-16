const Cast = require('../models/Cast');
const Movie = require('../models/Movie');

exports.createCast = (data) => Cast.create(data);
exports.getAllCast = () => Cast.find();
exports.attachCast = async (movieId, castId) => {

    try {

        const cast = await Cast.findById(castId);
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } })

    } catch (error) {
        throw new Error('Cast do not exists.');
    }
};
