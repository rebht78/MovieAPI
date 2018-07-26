const mongoose = require('mongoose');
const config = require('config');

mongoose.connect(config.get("db.host"),{ useNewUrlParser: true })
.then(() => console.log('DB Connected!'))
.catch(err => console.log('Error occur at '+err));

const movieSchema = new mongoose.Schema({
    name:String,
    tags:[ String ]
});

const Movie = mongoose.model("movies_collection", movieSchema);

module.exports = Movie;
module.exports.createMovie = function(newMovie,callback) {
    newMovie.save(callback);
};