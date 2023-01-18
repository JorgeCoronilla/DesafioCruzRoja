//Conexión a MySQL con Sequelize
const { Sequelize } = require('sequelize');
const fs = require('fs');



const serverCa = fs.readFile(`${__dirname}/DigiCertGlobalRootCA.crt.pem`, 'utf8', (err, data) => {
     if (err) {
      console.error(err);
      return;
    }
    console.log('ssl cert sent');
  });

const pool = new Sequelize(
    'dbtest',
    process.env.USER,
    process.env.PASS, {
    host: process.env.HOST,
    port: 3306,
    dialect: 'mysql',
   dialectOptions: {  ssl: {
        ca: serverCa
    }},
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
);

module.exports = pool;

/*
const pool = new Sequelize(
    'dbtest',
    'root',
    'rootroot', {
    host: process.env.HOST,
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
);
module.exports = pool;*/