const { response, request } = require('express')

const moment = require('moment')

const Client = require('../models/ORM/Client')


const addClient = async (req = request, res = response) => {

  
  try {
    //const { name, status } = req.body; 

    const data= await Client.create({
        ...req.body
        })
    data ?
    res.json(data) :
    res.json({
      mssg: "error creating client"
    })
    
  } catch (error) {
    console.log(error);
  }
}

const getClients = async(req = request, res = response) => {
    
    try {

        //const user = await User();

        const data = await Client.findAll();
        
        return res.json({
            clients: data
        })    
        
    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)    
    }

}

const getClientById = async (req = request, res = response)=>{

  try {
    const {id} = req.params
    const data = await Client.findByPk(id)
    !data? 
    res.json({
      mssg: "client no exist"
    }):
    res.json({
      care_plan: data
    })
  } catch (error) {

    console.log(error)
    
  }

}


/** 
* @param Request request
* @param Response response
* @return Response Json
*/

const updateClient = async (req=request, res=response) => {
  
  try{

    const {name, city, country, address, status}=req.body;
    const { id } = req.params
    const timestamp = moment().format('YYYY-MM-DD')
    
    const data = await Client.update( { name, city, country, address, status, updated_at: timestamp } , {
        where: { id }
    })
    !data? 
    res.json({
      mssg: "error update client"
    }):
    res.json({
      client: data
    })
  }
  catch(error){
    console.log(error);
  };
}

/** 
* @param Request request
* @param Response response
* @return Response Json
*/


const deleteClient = async (req=request, res=response) => {
  try {
    const { id } = req.params

    const client = await Client.findByPk(id);
    const resp = await client.destroy()
    res.json({
      resp,
      mssg:"Delete succesfully"
    })
  } catch (error) {
   console.log(error); 
  }
}


module.exports = {
    getClients,
    getClientById,
    addClient,
    updateClient,
    deleteClient
};
