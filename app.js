const config = require('config');
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
    // don't save sensitive information such as password on json files used by config
    /*
    for windows pc use SET to assign NODE_ENV variable
    for mac os/linux use export to assign it

    set NODE_ENV=development
    export NODE_ENV=production
    */
    console.log(`The details of db is ${config.get("db.host")} and of mail is ${config.get("mail.host")}`);
});