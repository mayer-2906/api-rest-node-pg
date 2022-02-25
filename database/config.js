require('dotenv').config();
const { Client } = require('pg')

const connectionData = {
    user: process.env.USER_DB,
    host: 'localhost',
    database: process.env.DATABASE,
    password: process.env.PWS_DB,
    port: process.env.PORT_DB,
  }
  //importe Poll en ves de client
  const client = new Client(connectionData)

module.exports = client;