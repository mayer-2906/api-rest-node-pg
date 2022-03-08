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

  const res = await client.query('SELECT * FROM clientes WHERE id=$1', [id])

    return {
        count: res.rowCount,
        client: res.rows
    }
}
const set_Client = async (params, status = true) => {

  const { name, identification, city, country, address } = params   

  try{
    
    const res = await client.query('INSERT INTO clientes ( name , identification, city, country, address, status) VALUES ($1, $2, $3, $4, $5, $6 ) RETURNING *', [name, identification, city, country, address, status])
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
    
    const res = await client.query('UPDATE clientes SET name=$2, city=$3, country=$4, address=$5, status=$6 WHERE id=$1 RETURNING *',[id, name, city, country, address, status])

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
    
    const res = await client.query('DELETE FROM clientes WHERE id=$1 RETURNING *', [id])
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
