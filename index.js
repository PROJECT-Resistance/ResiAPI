const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const { promisify } = require('util');

const initializeDatabase = require('./database');
const config = require('./config.json');
const users = config.users;

const app = express();
app.use(bodyParser.json());
app.use(basicAuth({ users, challenge: true }));

const startServer = async () => {
    await initializeDatabase(app);

    const port = process.env.SERVER_PORT || 3000;
    await promisify(app.listen).bind(app)(port);
    console.log(`Listening on port ${port}`);
};
startServer();
