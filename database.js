const Sequelize = require('sequelize');
const epilogue = require('epilogue');

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './data/users.sqlite'
});

const User = database.define('users', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    tag: Sequelize.STRING,
    mc: Sequelize.STRING,
    uuid: Sequelize.UUIDV4
});

const initializeDatabase = async (app) => {
    epilogue.initialize({app, sequelize: database, updateMethod: 'PATCH'});

    epilogue.resource({
        model: User,
        endpoints: ['/users', '/users/:id']
    })

    await database.sync();
};

module.exports = initializeDatabase;