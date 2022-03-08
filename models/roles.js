const client = require('../database/config');

/** 
* @return Response query
* @return users
* @return count users
*/

async function allRoles() {

    const res = await client.query('SELECT * FROM roles')

    return {
        count: res.rowCount,
        users: res.rows
    }
}


/** 
* @param type req.body
* @param status req.body
* @return Response query
*/

async function addRoles(type, status) {

    try {

        return await client.query('INSERT INTO roles (type, status) VALUES ($1, $2) RETURNING *', [type, status]);

    } catch (error) {

        console.log(error)
    }


}


/** 
* @param  id req.params.id
* @return Result Query
*/


async function RolById(id) {

    try {

        const resul = await client.query('SELECT * FROM roles WHERE id = $1', [id]);
        return resul;


    } catch (error) {

        console.log(error)

    }

}


/** 
* @param  id req.params.id
* @return Result Query
*/


async function deleteRolByID(id) {

    try {

        const resul = await client.query('DELETE FROM roles WHERE id = $1', [id]);
        return resul;


    } catch (error) {

        console.log(error)
    }

}

/** 
* @param  id req.params.id
* @return Result Query
*/

async function updateeRolByID(id, type, status) {

    try { 
        return await client.query('UPDATE roles SET type = $2, status = $3 WHERE id = $1 RETURNING *', [id, type, status]);      

    } catch (error) {

        console.log(error) 
    }

}

module.exports = {
    allRoles,
    addRoles,
    RolById,
    deleteRolByID,
    updateeRolByID
};
