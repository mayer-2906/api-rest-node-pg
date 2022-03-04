const client = require('../database/config');
const moment = require('moment')

const get_clients = async () => {

  const res = await client.query('SELECT * FROM clientes')

    return {
        count: res.rowCount,
        clients: res.rows
    }
}

const get_client = async (id) => {

  const res = await client.query(`SELECT * FROM clientes WHERE id=${id}`)

    return {
        count: res.rowCount,
        client: res.rows
    }
}
const set_Client = async (params, status = true) => {

  const { name, identification, city, country, address } = params   

  try{
    
    const res = await client.query(`INSERT INTO clientes ( name , identification, city, country, address, status) VALUES ('${name}', '${identification}', '${city}', '${country}', '${address}', '${status}') RETURNING *`)
    return{
        count: res.rowCount,
        clients: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const update_Client = async (id, name, city, country, address, status) => {

  try{
    
    const res = await client.query(`UPDATE clientes SET name='${name}', city='${city}', country='${country}', address='${address}', status='${status}' WHERE id=${id} RETURNING *`)

    return{
        count: res.rowCount,
        clients: res.rows
    }

  } 
  catch (error) {

    console.log(error);
    return{
      status:false
    }
  } 

}

const delete_Client = async (id) => {

  try{
    
    const res = await client.query(`DELETE FROM clientes WHERE id=${id} RETURNING *`)
    console.log(`soy la respuesta de la query: ${res}`);
    return{
        count: res.rowCount,
        client: res.rows,
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
  get_clients,
  get_client,
  set_Client,
  update_Client,
  delete_Client
};
