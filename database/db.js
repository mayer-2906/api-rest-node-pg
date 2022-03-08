/*  import sequelize */

const Sequelize = require('sequelize');

module.exports = new Sequelize('dd37uik0okfu49', 'muqvkuenrwqqff', 'd7015551ee930119de94596eec604257b7f8220b3d4a1112dbfb7d65c0569d2f', {

    host: 'ec2-54-156-110-139.compute-1.amazonaws.com',
    port: '5432',
    dialect: 'postgres',
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