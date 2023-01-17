//Conexión a MySQL con Sequelize
const { Sequelize } = require('sequelize');
const fs = require('fs');

//const serverCa =[fs.readFileSync('C:/Users/USER/Dropbox/ADMIN/Jorge Coronilla Naranjo/Informatica/Full stack/The Bridge/git/DesafioCruzRoja/server/ddbb/sql/DigiCertGlobalRootCA.crt.pem')]
//var serverCa = fs.readFile(`${__dirname}/DigiCertGlobalRootCA.crt.pem`, 'utf8')

/*
fs.readFile(`${__dirname}/DigiCertGlobalRootCA.crt.pem`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

*/

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
    process.env.USER,
    process.env.PASS, {
    host: process.env.HOST,
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 100,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {  ssl: {
        ca: serverCa
    }}
}
);*/

