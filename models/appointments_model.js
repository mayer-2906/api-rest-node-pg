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

  const res = await client.query(`SELECT * FROM appointments WHERE id=${id}`)

    return {
        count: res.rowCount,
        appointment: res.rows
    }
}
const set_appointment = async (params, status = true) => {

  const { name, date, start, end, place, patient_id, user_client_id, care_plan_id } = params   

  try{
    
    const res = await client.query(`INSERT INTO appointments ( name, date, "start", "end", place, status, patient_id, user_client_id, care_plan_id) VALUES ('${name}', '${date}', '${start}', '${end}', '${place}', '${status}', '${patient_id}','${user_client_id}', '${care_plan_id}') RETURNING *`);
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
    const res = await client.query(`UPDATE appointments SET name='${name}', "date"='${date}', "start"='${start}', end='${end}', place='${place}', status='${status}', patient_id='${patient_id}', user_client_id='${user_client_id}', care_plan_id='${care_plan_id}' WHERE id=${id} RETURNING *`)

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
    
    const res = await client.query(`DELETE FROM appointments WHERE id=${id} RETURNING *`)
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
