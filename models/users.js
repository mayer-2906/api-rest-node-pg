const client = require('../database/config')
var uuid = require('uuid');

/** 
* @return Response query
* @return users
* @return count users
*/

async function allUsers() {

    const res = await client.query('SELECT * FROM users')
   
    return {
        count: res.rowCount,
        users: res.rows
    }
}

/** 
* @param  id req.params.id
* @return Response query
*/

async function user(id) {

    try {

        const resul = await client.query('SELECT * FROM users WHERE id = $1', [id]);
        return resul;


    } catch (error) {

        console.log(error)

    }

}


/** 
* @param  id req.params.id
* @return Response query
*/

async function deleteUserByID(id) {


    try {

        const resul = await client.query('DELETE FROM users WHERE id = $1', [id]);
        return resul;

    } catch (error) {

        console.log(error.detail)


    }
}


/** 
* @param req.body name, last_nam, email, password, status, id_rol 
* @return Response query
*/

async function addUser(name, last_nam, email, password, status, id_rol) {

    const api_token = uuid.v4()

    try {

        return await client.query('INSERT INTO users (name, last_name, email, password, api_token, status, id_rol) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [name, last_nam,
            email, password, api_token, status, id_rol]);

    } catch (error) {

        console.log(error)
    }


}


/** 
* @param  req.params.id name, last_nam, email, password, status, id_rol 
* @return Response query
*/

async function updateeUserByID(name, last_name, email, password, status, id_rol, id) {

    try {
        return await client.query('UPDATE users SET name = $1, last_name = $2, email = $3, password = $4, status = $5, id_rol = $6 WHERE id = $7 RETURNING *', [name, last_name, email, password, status, id_rol, id]);
        
    } catch (error) {
        
        console.log(error)
    }

}


module.exports = {
    user,
    allUsers,
    deleteUserByID,
    addUser,
    updateeUserByID
};
