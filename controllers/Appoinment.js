const { response, request } = require('express')

const moment = require('moment')

const Appointment = require('../models/ORM/Appointment')


const addAppointment = async (req = request, res = response) => {

  
  try {
    const { name, date, start, end, place, patient_id, user_client_id, care_plan_id } = req.body    

    const data= await Appointment.create({
        name,
        date,
        start,
        end,
        place,
        patient_id,
        user_client_id,
        care_plan_id
        })
    data ?
    res.json(data) :
    res.json({
      mssg: "error creating appointment"
    })
    
  } catch (error) {
    console.log(error);
  }
}

const getAppointments = async(req = request, res = response) => {
    
    try {
        const data = await Appointment.findAll();
        
        return res.json({
            appointment: data
        })    
        
    } catch (error) {
        console.log(error);

        return res.json({
            error
        }, 500)    
    }

}

const getAppointmentById = async (req = request, res = response)=>{

  try {
    const {id} = req.params
    const data = await Appointment.findByPk(id)
    !data? 
    res.json({
      mssg: "appointment no exist"
    }):
    res.json({
      appointment: data
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

const updateAppointment = async (req=request, res=response) => {
  
  try{

    //const { name, date, start, end, place, patient_id, user_client_id, care_plan_id } = req.body   
    const { id } = req.params
    const timestamp = moment().format('YYYY-MM-DD')
    
    const data = await Appointment.update( {...req.body, updated_at: timestamp } , {
        where: { id }
    })
    !data? 
    res.json({
      mssg: "error update appointment"
    }):
    res.json({
      appointment: data
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


const deleteAppointment = async (req=request, res=response) => {
  try {
    const { id } = req.params

    const appointment = await Appointment.findByPk(id);
    const resp = await appointment.destroy()
    res.json({
      resp,
      mssg:"Delete succesfully"
    })
  } catch (error) {
   console.log(error); 
  }
}


module.exports = {
    addAppointment,
    getAppointmentById,
    getAppointments,
    updateAppointment,
    deleteAppointment
};
