const { response, request } = require('express')

const {get_clients, get_client, set_Client, update_Client, delete_Client }    = require('../models/clients_model')

const getClients = async(req = request, res = response) => {
    
    try {

        //const user = await User();

        const { count, clients } = await get_clients();
        
        return res.json({
            count, 
            clients
        })    
        
    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)    
    }

}

const getClient = async(req = request, res = response) => {
    
  try {

      const uid= req.params.id;

      const { count, client } = await get_client(uid);
      
      return res.json({
          count, 
          client
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}



const addClient = async(req = request, res = response) => {
    
  try {

      const { status, ...params } = req.body; 
      //status=null ? status=true : status;

      const {count, clients } = await set_Client(params, status);
      
      return res.json({
          count, 
          client:clients
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const updateClient = async(req = request, res = response) => {
    
  try {

      const uid = req.params.id; 
      const {name, city, country, address, status}=req.body;

      const {count, clients } = await update_Client(uid, name, city, country, address, status);
      
      return res.json({
          count, 
          clients
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const deleteClient = async(req = request, res = response) => {
    
  try {

      const uid = req.params.id; 
      

      const {count,client,detail} = await delete_Client(uid)

      if(detail==null){
        let mssg ='';
        count == 1 ? mssg='Borrado exitoso' : mssg='Ese cliente no existe';
        return res.json({
            count: count, 
            client: client,
            mssg,
            
        }) 
      }
      return res.json({
        ok:false,
        mssg:'No puede borrar ese registro porque contiene una llave foranea a otra tabla',
        detail
      })
         
      
  } catch (error) {
      
      return res.json({
        status:500,  
        error
      })    
  }

}

module.exports = {
    getClients,
    getClient,
    addClient,
    updateClient,
    deleteClient
};
