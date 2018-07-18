const express = require('express');
const router = require('./routes/movies');
const app = express();
const port = process.env.port || 3000;

//middleware configuratio
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/movies',router);

app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});