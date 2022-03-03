require('dotenv').config();
const { Client } = require('pg')

const connectionData = {
    user: process.env.USER_DB,
    host: process.env.HST_DB, 
    database: process.env.NAM_DB,
    password: process.env.PWS_DB,
    port: process.env.PORT_DB,
    ssl: {
      rejectUnauthorized: false
    }
    
  }
  
  const client = new Client(connectionData)

module.exports = client;