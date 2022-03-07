const { response, request } = require('express')

const { update_patient, delete_patient }    = require('../models/patients_model')


const updatePatient = async(req = request, res = response) => {
    
  try {

      const uid = req.params.id; 
      const {name, last_name, email, gender, app_installed, status, user_client_id}=req.body;

      const {count, patient } = await update_patient(uid,name, last_name, email, gender, app_installed, status, user_client_id);
      
      return res.json({
          count, 
          patient
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const deletePatient = async(req = request, res = response) => {
    
  try {

      const uid = req.params.id; 
      

      const {count,client,detail} = await delete_patient(uid)

      if(detail==null){
        let mssg ='';
        count == 1 ? mssg='Borrado exitoso' : mssg='Ese paciente no existe';
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
    updatePatient,
    deletePatient
};
