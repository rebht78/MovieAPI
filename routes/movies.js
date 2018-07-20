const Joi = require('joi');
const express = require('express');
const validationSchema = require('./validation');
const router = express.Router();

const movies = [
    {id:1,movieName:'Jurassic Park'},
    {id:2,movieName:'The Lost World'},
    {id:3,movieName:'The Study in Pink'},
    {id:4,movieName:'The Blind Banker'}
];

router.get('/', (req,res) => {
    res.send(movies);
});

router.get('/:id', (req,res) => {
    const movie = movies.find(function(item){
        return item.id == req.params.id;
    });
    if (!movie) {
        return res.status(404).send('No Movies with specified ID found!');
    }
    res.send(movie);
});

router.post('/', (req,res) => {
    const result = Joi.validate(req.body,validationSchema.movies);
    if (result.error)
    {
        return res.status(400).send(result.error);
    }
    const movie = {
        id: movies.length + 1,
        movieName:req.body.movieName
    };

    movies.push(movie);

    res.send(movies);
});

router.put('/:id', (req,res) => {
    if (req.params.id >= movies.length)
    {
        return res.status(400).send('Movie ID is not valid!');
    }
    else
    {
        movies[req.params.id - 1].movieName = req.body.movieName;
    }
    res.send(movies);
});

router.delete('/:id', (req,res) => {
    if (req.params.id >= movies.length)
    {
        return res.status(400).send('Movie ID is not valid!');
    }
    else
    {
        movies.splice(req.params.id - 1,1);
    }
    res.send(movies);
});

module.exports = router;