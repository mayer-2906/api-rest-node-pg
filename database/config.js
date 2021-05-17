const { Client } = require('pg')
const dbUrl = `postgresql://postgres:@127.0.0.1:49165/laravel`;

const client = new Client({
    connectionString: dbUrl
})

module.exports = client;