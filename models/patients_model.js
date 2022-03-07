const client = require('../database/config');


const update_patient = async (id, name, last_name, email, gender, app_installed, status, user_client_id) => {

  try{
    
    const res = await client.query('UPDATE patients SET name=$2, last_name=$3, email=$4, gender=$5, app_installed=$6 status=$7 user_client_id=$8 WHERE id=$1 RETURNING *',[id, name, last_name, email, gender, app_installed,status, user_client_id])

    return{
        count: res.rowCount,
        patient: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const delete_patient = async (id) => {

  try{
    
    const res = await client.query('DELETE FROM patients WHERE id=$1 RETURNING *', [id])
    console.log(`soy la respuesta de la query: ${res}`);
    return{
        count: res.rowCount,
        patient: res.rows,
    }

  } 
  catch (error) {
    //console.log(error.detail);
    return{
      detail:error.detail
    }
  } 

}

  
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
    addPatients,
    update_patient,
    delete_patient
};
