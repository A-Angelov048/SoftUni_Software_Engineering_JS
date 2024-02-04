const Movie = require('../models/MovieCreate');

exports.getAllMovies = () => Movie.find();

exports.saveMovie = (data) => Movie.create(data);

exports.findById = (idMovie) => Movie.findById(idMovie);
