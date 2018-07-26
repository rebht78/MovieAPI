const config = require('config');
const express = require('express');
const router = require('./routes/movies');
const MovieModel = require('./schema/movies');
const app = express();
const port = process.env.port || 3000;

//middleware configuratio
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/movies',router);

const newMovie = new MovieModel({
    name: "The Great Game",
    tags:["detective","great","game","stranger"]
});

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
    // don't save sensitive information such as password on json files used by config
    /*
    for windows pc use SET to assign NODE_ENV variable
    for mac os/linux use export to assign it

    set NODE_ENV=development
    export NODE_ENV=production
    */
    MovieModel.createMovie(newMovie, () => {
        console.log("Data inserted successfully!");
    });
});