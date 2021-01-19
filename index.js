const express = require('express');
const bodyParser = require('body-parser');

const initializeDatabase = require('./database');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app.listen(3001, async () => {
    await initializeDatabase(app);
    console.log('listening on port %s...', server.address().port);
});
