const Cast = require('../models/Cast');
const Movie = require('../models/Movie');

exports.createCast = (data) => Cast.create(data);
exports.getAllCast = () => Cast.find();
exports.attachCast = (movieId, castId) => Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
