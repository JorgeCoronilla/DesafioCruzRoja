//Conexión a MySQL con Sequelize

const { Sequelize } = require('sequelize');

const pool = new Sequelize('dbTest', 'root','rootroot', {
    host: process.env.HOST,
    dialect: 'mysql',
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
);
module.exports = pool;

