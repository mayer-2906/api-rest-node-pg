const client = require('../database/config')


/** 
* @return Response query
* @return usersClients
* @return count usersClient
*/

async function allUsersClients() {

    const res = await client.query('SELECT * FROM users_clients')


    return {
        count: res.rowCount,
        usersClients: res.rows
    }


}

/** 
* @param  id req.params.id
* @return Response query
*/

async function userClient(id) {

    try {

        const resul = await client.query('SELECT * FROM users_clients WHERE id = $1', [id]);
        return resul;


    } catch (error) {

        console.log(error)

    }


}


/** 
* @param  id req.params.id
* @return Response query
*/

async function deleteUserClientByID(id) {

    try {

        const resul = await client.query('DELETE FROM users_clients WHERE id = $1', [id]);
        return resul;

    } catch (error) {

        console.log(error.detail)

    }

}

/** 
* @param  req.body status, user_id, client_id
* @return Response query
*/

async function addUserClients(status, user_id, client_id) {

    try {

        return await client.query('INSERT INTO users_clients (status, user_id, client_id) VALUES ($1, $2, $3) RETURNING *', [status, user_id, client_id]);

    } catch (error) {

        console.log(error)
    }


}

/** 
* @param  req.body status, user_id, client_id
* @return Response query
*/


async function updateUserClinetByID(status, user_id, client_id, id) {

    try {
        return await client.query('UPDATE users_clients SET status = $1, user_id = $2, client_id = $3 WHERE id = $4 RETURNING *', [ status, user_id, client_id, id]);

    } catch (error) {

        console.log(error)
    }



}


module.exports = {

    allUsersClients,
    userClient,
    deleteUserClientByID,
    addUserClients, 
    updateUserClinetByID

};
