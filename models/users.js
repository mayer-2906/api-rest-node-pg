const client = require('../database/config')

async function User(){

    try {
        
        await client.connect()

        return {
            client,
            all
        };

    } catch (error) {
        console.log(error);
        throw new Error('Error inicializando la base de datos');
    }

}

async function all(){

    const res = await client.query('SELECT * FROM gestion.users')

    client.end()
    return {
        count: res.rowCount,
        users: res.rows
    }
}

module.exports = {
    User
};
