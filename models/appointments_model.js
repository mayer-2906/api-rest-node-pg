const client = require('../database/config');
const moment = require('moment')

const get_appointments = async () => {

  const res = await client.query('SELECT * FROM appointments')

    return {
        count: res.rowCount,
        appointments: res.rows
    }
}

const get_appointment = async (id) => {

  const res = await client.query('SELECT * FROM appointments WHERE id=$1',[id])

    return {
        count: res.rowCount,
        appointment: res.rows
    }
}
const set_appointment = async (params, status = true) => {

  const { name, date, start, end, place, patient_id, user_client_id, care_plan_id } = params   

  try{
    
    const res = await client.query(`INSERT INTO appointments ( name, date, "start", "end", place, status, patient_id, user_client_id, care_plan_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [name, date, start, end, place, status, patient_id, user_client_id, care_plan_id]);
    return{
        count: res.rowCount,
        appointments: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const update_appointment = async (id, params) => {

  try{
    const { name, date, start, end, place, status, patient_id, user_client_id, care_plan_id } = params;
    const res = await client.query('UPDATE appointments SET name=$2, date=$3, "start"=$4, "end"=$5, place=$6, status=$7, patient_id=$8, user_client_id=$9, care_plan_id=$10 WHERE id=$1 RETURNING *', [id, name, date, start, end, place, status, patient_id, user_client_id, care_plan_id ])

    return{
        count: res.rowCount,
        appointments: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const delete_appointment = async (id) => {

  try{
    
    const res = await client.query('DELETE FROM appointments WHERE id=$1 RETURNING *', [id])
    //console.log(`soy la respuesta de la query: ${res}`);
    return{
        count: res.rowCount,
        appointment: res.rows,
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
  get_appointments,
  get_appointment,
  set_appointment,
  update_appointment,
  delete_appointment
};
