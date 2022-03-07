const client = require('../database/config');


/** 
* @return Response query
* @return Patients
* @return count Patients
*/

async function allPatients() {

    const res = await client.query('SELECT * FROM patients');

    return {
        count: res.rowCount,
        users: res.rows
    }
}


/** 
* @return Response query
* @return Patient 
*/


async function patientById(id) {

    try {

        const resul = await client.query('SELECT * FROM patients WHERE id = $1', [id]);
        return resul;


    } catch (error) {

        console.log(error)

    }



}


/** 
* @param type req.body
* @param status req.body
* @return Response query
*/

async function addPatients(name, last_name, email, gender, app_installed, status, user_client_id) {

    try {

        return await client.query('INSERT INTO patients (name, last_name, email, gender, app_installed, status, user_client_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [name, last_name, email, gender, app_installed, status, user_client_id]);

    } catch (error) {

        console.log(error)
    }


}



module.exports = {
    allPatients,
    patientById,
    addPatients
    
};
