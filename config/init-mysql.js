const { Sequelize } = require('sequelize');
const dbConfig = require('./mysql-config');

const sqlise = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PWD, {
    dialect: 'mysql',
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    logging: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    retry: {
        match: [
            Sequelize.ConnectionError,
            Sequelize.ConnectionRefusedError,
            Sequelize.ConnectionTimedOutError,
            Sequelize.TimeoutError,
            'ENETUNREACH',
        ],
        max: 5,
    },
});

// open the connection
sqlise
    .authenticate()
    .then(() => {
        console.log('Connection to DB established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

// close connection when terminal is closed.
process.on('SIGINT', async () => {
    await sqlise.close();
    console.log('MySQL-DB connection closed.');
    process.exit(0);
});

module.exports = sqlise;
