const { response, request } = require('express')

const {get_appointments, get_appointment, set_appointment,update_appointment, delete_appointment }    = require('../models/appointments_model')

const getAppointments = async(req = request, res = response) => {
    
    try {

        //const user = await User();

        const { count, appointments } = await get_appointments();
        
        return res.json({
            count, 
            appointments
        })    
        
    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)    
    }

}

const getAppointment = async(req = request, res = response) => {
    
  try {

      const uid= req.params.id;

      const { count, appointment } = await get_appointment(uid);
      
      return res.json({
          count, 
          appointment
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}



const addAppointment = async(req = request, res = response) => {
    
  try {

      const { status, ...params } = req.body; 
      //status=null ? status=true : status;

      const {count, appointments } = await set_appointment(params, status);
      
      return res.json({
          count, 
          appointment: appointments
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const updateAppointment = async(req = request, res = response) => {
    
  try {

      const uid = req.params.id; 
      const params =req.body;

      const {count, appointments } = await update_appointment(uid, params);
      
      return res.json({
          count, 
          appointments
      })    
      
  } catch (error) {
      console.log(error);

      return res.json({
          error
      }, 500)    
  }

}

const deleteAppointment = async(req = request, res = response) => {
    
  try {

      const uid = req.params.id; 
      

      const {count, appointment, detail} = await delete_appointment(uid)

      if(!detail){
        let mssg ='';
        count == 1 ? mssg='Borrado exitoso' : mssg='Ese paciente no existe';
        return res.json({
            count: count, 
            appointment,
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
    getAppointments,
    getAppointment,
    addAppointment,
    updateAppointment,
    deleteAppointment
};
