const Movie = require('../models/Movie');

exports.getAllMovies = () => Movie.find();

exports.saveMovie = (data, userID) => {
    const newData = {
        ...data,
        creatorId: userID
    }
    return Movie.create(newData);
}

exports.findById = (idMovie) => Movie.findById(idMovie).populate('casts');

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

exports.editMovie = (idMovie, data) => Movie.findByIdAndUpdate(idMovie, data, { runValidators: true });

exports.deleteMovie = (idMovie) => Movie.findByIdAndDelete(idMovie);
