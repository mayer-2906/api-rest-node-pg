require('dotenv').config();
const { Client } = require('pg')

const connectionData = {
    user: process.env.USER_DB,
    host: process.env.HST_DB, 
    database: process.env.DATABASE,
    password: process.env.PWS_DB,
    port: process.env.PORT_DB,
  }
  
  const client = new Client(connectionData)

module.exports = client;