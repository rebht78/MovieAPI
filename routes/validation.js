const Joi = require('joi');

const movieSchema = {
    movieName:Joi.string().min(3).max(30).required()
};

//create schema for each collection of inputs in this way

module.exports = movieSchema;
