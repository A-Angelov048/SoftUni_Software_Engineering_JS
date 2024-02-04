const Cast = require('../models/Cast');

exports.createCast = (data) => Cast.create(data);
exports.getAllCast = () => Cast.find();