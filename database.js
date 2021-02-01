const Sequelize = require('sequelize');
const finale = require('finale-rest');

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './data/users.sqlite'
});

const User = database.define('users', {
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userid: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    mc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        validate: {
            isUUID: 4
        }
    }
});

const initializeDatabase = async (app) => {
    finale.initialize({ app, sequelize: database, updateMethod: 'PATCH' });

    finale.resource({
        model: User,
        endpoints: ['/users', '/users/:id']
    });

    await database.sync();
};

module.exports = initializeDatabase;
