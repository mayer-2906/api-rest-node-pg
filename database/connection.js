
require('dotenv').config();
/*  import sequelize */

const Sequelize = require('sequelize');
const { process } = require('uniqid');

module.exports = new Sequelize('dd37uik0okfu49', process.env.USER_DB, process.env.PWS_DB, {

    host: process.env.HST_DB,
    port: process.env.PORT_DB,
    dialect: process.env.DIALECT_DB,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    },

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
    
    

})