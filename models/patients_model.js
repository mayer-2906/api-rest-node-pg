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

module.exports = {
  update_patient,
  delete_patient
};
