const express = require('express');
const app = express();
const port = process.env.port || 3000;

const movies = [
    {id:1,movieName:'Jurassic Park'},
    {id:2,movieName:'The Lost World'},
    {id:3,movieName:'The Study in Pink'},
    {id:4,movieName:'The Blind Banker'}
];

app.get('/api/movies', (req,res) => {
    res.send(movies);
});

app.get('/api/movies/:id', (req,res) => {
    const movie = movies.find(function(item){
        return item.id == req.params.id;
    });
    if (!movie) {
        return res.status(404).send('No Movies with specified ID found!');
    }
    res.send(movie);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});