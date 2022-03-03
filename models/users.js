const client = require('../database/config')
var uuid = require('uuid');


/** 
* @return Response query
* @return users
* @return count users
*/

async function allUsers() {


    const res = await client.query('SELECT * FROM users')

    //client.end()
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


async function addUser(name, last_nam, email, password, status){

   const api_token = uuid.v4()

    try {

        return await client.query('INSERT INTO roles (name, last_name, name, last_nam, email, password, api_token, status) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, last_nam,
        email, password, api_token, status]);

    } catch (error) {

        console.log(error)
    }


}

module.exports = {
    user,
    allUsers,
    deleteUserByID,
    addUser
};
