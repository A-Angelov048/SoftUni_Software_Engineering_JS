const Movie = require('../models/MovieCreate');

exports.getAllMovies = () => Movie.find();

exports.saveMovie = (data) => Movie.create(data);

exports.findById = (idMovie) => Movie.findById(idMovie);

exports.searchMovie = (title, genre, year) => {
    const query = {}

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = new RegExp(genre, 'i');
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
}

