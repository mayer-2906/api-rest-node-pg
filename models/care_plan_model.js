const client = require('../database/config');
const moment = require('moment')

const getCarePlan = async () => {

  const res = await client.query('SELECT * FROM care_plan')

    return {
        count: res.rowCount,
        care_plan: res.rows
    }
}

const setCarePlan = async (name, status=true) => {

  const date = moment(new Date()).format("YYYY-MM-DD");

  try{
    
    const res = await client.query(`INSERT INTO care_plan ( name , date, status) VALUES ('${name}', '${date}', '${status}') RETURNING *`)
    console.log(`soy la respuesta: ${res}`);
    return{
        count: res.rowCount,
        care_plan: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const updateCare_Plan = async (id, name, date, status) => {

  try{
    
    const res = await client.query(`UPDATE care_plan SET name='${name}', date='${date}', status='${status}' WHERE id=${id} RETURNING *`)
    console.log(`soy la respuesta: ${res}`);
    return{
        count: res.rowCount,
        care_plan: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const deleteCare_Plan = async (id) => {

  try{
    
    const res = await client.query(`DELETE FROM care_plan WHERE id=${id} RETURNING *`)
    console.log(`soy la respuesta: ${res}`);
    return{
        count: res.rowCount,
        care_plan: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

module.exports = {
  getCarePlan,
  setCarePlan,
  updateCare_Plan,
  deleteCare_Plan
};
